import { useEffect, useRef } from 'react'
import {
  spawnParticles,
  updateParticle,
  applyTwinkle,
  applyColorCycle,
  createParticle,
  type Particle,
} from './particles'
import { getGlowSprite, clearSpriteCache } from './sprites'
import type { ParticleShape } from './shapes'

const SPRING_CLAMP = 120

export interface ParticleLoopConfig {
  count: number
  colors: string[]
  minSize: number
  maxSize: number
  speed: number
  glowIntensity: number
  mouseInfluenceRadius: number
  mouseEffect: 'repel' | 'attract' | 'none'
  shape: ParticleShape
  /** Opacity-pulse strength, 0 = off. Modulates draw-time alpha only. */
  twinkle: number
  /** Palette-cycling speed, 0 = off. Particles step through `colors` over time. */
  colorCycle: number
  /** Whether touch drag drives the same repel/attract influence as the mouse. */
  touch: boolean
  /**
   * Escape hatch: when set, fully controls per-particle drawing and bypasses
   * the sprite cache. `ctx` is translated to the particle position (draw at the
   * origin) with globalAlpha pre-set to the particle's opacity. Overrides `shape`.
   * `p` is the live simulation particle — read its fields (size, color, opacity,
   * springOffsetX/Y) but do not mutate it, or you'll corrupt the motion.
   */
  renderParticle?: (ctx: CanvasRenderingContext2D, p: Particle) => void
}

/**
 * Draws one particle. If `renderParticle` is set it takes precedence (ctx
 * translated to the particle, alpha pre-applied) and the sprite path is skipped;
 * otherwise the cached glow sprite for the particle's shape is blitted.
 */
export function drawParticle(
  ctx: CanvasRenderingContext2D,
  p: Particle,
  cfg: ParticleLoopConfig,
  dpr: number,
): void {
  const drawX = p.x + p.springOffsetX
  const drawY = p.y + p.springOffsetY

  if (cfg.renderParticle) {
    ctx.save()
    ctx.globalAlpha = p.opacity
    ctx.translate(drawX, drawY)
    cfg.renderParticle(ctx, p)
    ctx.restore()
    return
  }

  // Pre-rendered halo + shaped core, cached per (shape, color, size, glow, dpr).
  // No gradient/arc allocation in this hot path — only a Map lookup + blit.
  const sprite = getGlowSprite(p.color, p.size, cfg.glowIntensity, dpr, cfg.shape)
  const half = p.size + cfg.glowIntensity
  ctx.globalAlpha = p.opacity
  ctx.drawImage(sprite, drawX - half, drawY - half, half * 2, half * 2)
}

export function useParticleLoop(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  config: ParticleLoopConfig,
) {
  // Always-current config ref — updated every render, read every rAF frame
  const configRef = useRef<ParticleLoopConfig>(config)
  configRef.current = config

  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)
  const canvasSizeRef = useRef({ w: 0, h: 0 })

  // Stable handler refs — same function identity across renders, no listener leak
  const onResizeRef = useRef<() => void>(() => undefined)
  const onMouseMoveRef = useRef<(e: MouseEvent) => void>(() => undefined)
  const onTouchStartRef = useRef<(e: TouchEvent) => void>(() => undefined)
  const onTouchMoveRef = useRef<(e: TouchEvent) => void>(() => undefined)
  const onTouchEndRef = useRef<() => void>(() => undefined)

  // ── Main rAF loop (mounts once, reads config dynamically via ref) ──────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Backing resolution for pre-rendered sprites — keeps them crisp on retina.
    // Re-read on resize: browser zoom / moving to another monitor changes it,
    // and stale sprites would render blurry until remount.
    let dpr = window.devicePixelRatio || 1

    const setSize = () => {
      const parent = canvas.parentElement
      const w = parent ? parent.clientWidth : window.innerWidth
      const h = parent ? parent.clientHeight : window.innerHeight
      canvasSizeRef.current.w = w
      canvasSizeRef.current.h = h
      // Back the canvas at DEVICE resolution so the browser doesn't upscale
      // (blur) it on hi-DPI screens; the CSS display size stays 100% via the
      // element's style. Drawing code works in CSS px via the dpr transform.
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      // Setting canvas.width resets all ctx state, so (re)apply the transform here.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setSize()

    const { count, colors, minSize, maxSize } = configRef.current
    particlesRef.current = spawnParticles(
      count,
      canvasSizeRef.current.w,
      canvasSizeRef.current.h,
      colors,
      minSize,
      maxSize,
    )

    onResizeRef.current = () => {
      const prevW = canvasSizeRef.current.w
      const prevH = canvasSizeRef.current.h
      // Re-read dpr first (zoom / monitor change) so setSize backs at the new
      // resolution; invalidate sprites built at the old dpr.
      const nextDpr = window.devicePixelRatio || 1
      if (nextDpr !== dpr) {
        dpr = nextDpr
        clearSpriteCache()
      }
      setSize()
      const scaleX = prevW > 0 ? canvasSizeRef.current.w / prevW : 1
      const scaleY = prevH > 0 ? canvasSizeRef.current.h / prevH : 1
      for (const p of particlesRef.current) {
        p.x *= scaleX
        p.y *= scaleY
      }
    }

    onMouseMoveRef.current = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    // Touch feeds the same mouseRef influence path as the mouse — spring physics
    // are shared, no duplication. Read once at mount (matches mousemove).
    const trackTouch = (t: Touch) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top }
    }
    onTouchStartRef.current = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) trackTouch(t)
    }
    onTouchMoveRef.current = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      trackTouch(t)
      // Only swallow the scroll gesture when particles actually react, so we
      // don't hijack page scroll when mouseEffect is 'none'.
      if (configRef.current.mouseEffect !== 'none') e.preventDefault()
    }
    onTouchEndRef.current = () => {
      // Release influence when the finger lifts (offscreen sentinel).
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('resize', onResizeRef.current)
    window.addEventListener('mousemove', onMouseMoveRef.current)

    // Capture locally so add/remove stay symmetric even if the prop changes.
    const touchEnabled = configRef.current.touch
    if (touchEnabled) {
      window.addEventListener('touchstart', onTouchStartRef.current, { passive: true })
      window.addEventListener('touchmove', onTouchMoveRef.current, { passive: false })
      window.addEventListener('touchend', onTouchEndRef.current)
      window.addEventListener('touchcancel', onTouchEndRef.current)
    }

    const draw = () => {
      const cfg = configRef.current
      // CSS dims (not canvas.width/height, which are now device px) — the ctx is
      // dpr-scaled, so all drawing/physics works in CSS coordinates.
      const { w, h } = canvasSizeRef.current
      ctx.clearRect(0, 0, w, h)

      for (const p of particlesRef.current) {
        // speed is applied per-frame so slider changes take effect immediately
        updateParticle(p, w, h, cfg.speed)
        applyTwinkle(p, cfg.twinkle)
        applyColorCycle(p, cfg.colors, cfg.colorCycle)
        applyMouseInfluence(p, mouseRef.current, cfg)
        drawParticle(ctx, p, cfg, dpr)
      }

      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResizeRef.current)
      window.removeEventListener('mousemove', onMouseMoveRef.current)
      if (touchEnabled) {
        window.removeEventListener('touchstart', onTouchStartRef.current)
        window.removeEventListener('touchmove', onTouchMoveRef.current)
        window.removeEventListener('touchend', onTouchEndRef.current)
        window.removeEventListener('touchcancel', onTouchEndRef.current)
      }
    }
  }, [canvasRef])

  // ── Particle count management (add/remove when count prop changes) ─────────
  useEffect(() => {
    const { count, colors, minSize, maxSize } = configRef.current
    const { w, h } = canvasSizeRef.current
    if (w === 0 || h === 0) return // canvas not yet sized

    const current = particlesRef.current
    if (current.length === count) return

    if (count > current.length) {
      const extra = Array.from({ length: count - current.length }, () =>
        createParticle(w, h, colors, minSize, maxSize),
      )
      particlesRef.current = [...current, ...extra]
    } else {
      particlesRef.current = current.slice(0, count)
    }
  }, [config.count])

  // ── Invalidate cached sprites when their visual inputs change ──────────────
  // colors is joined so a new-but-equal array reference doesn't churn the cache.
  const colorsKey = config.colors.join('|')
  useEffect(() => {
    clearSpriteCache()
  }, [colorsKey, config.minSize, config.maxSize, config.glowIntensity, config.shape])
}

function applyMouseInfluence(
  p: Particle,
  mouse: { x: number; y: number },
  config: ParticleLoopConfig,
) {
  if (config.mouseEffect === 'none') {
    p.springOffsetX *= 0.9
    p.springOffsetY *= 0.9
    return
  }

  const dx = p.x + p.springOffsetX - mouse.x
  const dy = p.y + p.springOffsetY - mouse.y
  const dist = Math.sqrt(dx * dx + dy * dy)

  if (dist < config.mouseInfluenceRadius && dist > 0) {
    const force = (config.mouseInfluenceRadius - dist) / config.mouseInfluenceRadius
    const dir = config.mouseEffect === 'repel' ? 1 : -1
    p.springOffsetX += (dx / dist) * force * 6 * dir
    p.springOffsetY += (dy / dist) * force * 6 * dir
  }

  p.springOffsetX *= 0.92
  p.springOffsetY *= 0.92

  p.springOffsetX = Math.max(-SPRING_CLAMP, Math.min(SPRING_CLAMP, p.springOffsetX))
  p.springOffsetY = Math.max(-SPRING_CLAMP, Math.min(SPRING_CLAMP, p.springOffsetY))
}
