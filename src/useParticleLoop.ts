import { useEffect, useRef } from 'react'
import {
  spawnParticles,
  updateParticle,
  createParticle,
  type Particle,
} from './particles'
import { getGlowSprite, clearSpriteCache } from './sprites'

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
      canvasSizeRef.current.w = parent ? parent.clientWidth : window.innerWidth
      canvasSizeRef.current.h = parent ? parent.clientHeight : window.innerHeight
      canvas.width = canvasSizeRef.current.w
      canvas.height = canvasSizeRef.current.h
    }

    setSize()

    const { count, colors, minSize, maxSize } = configRef.current
    particlesRef.current = spawnParticles(
      count,
      canvas.width,
      canvas.height,
      colors,
      minSize,
      maxSize,
    )

    onResizeRef.current = () => {
      const prevW = canvas.width
      const prevH = canvas.height
      setSize()
      const scaleX = canvas.width / prevW
      const scaleY = canvas.height / prevH
      for (const p of particlesRef.current) {
        p.x *= scaleX
        p.y *= scaleY
      }
      const nextDpr = window.devicePixelRatio || 1
      if (nextDpr !== dpr) {
        dpr = nextDpr
        clearSpriteCache() // rebuild sprites at the new device resolution
      }
    }

    onMouseMoveRef.current = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    window.addEventListener('resize', onResizeRef.current)
    window.addEventListener('mousemove', onMouseMoveRef.current)

    const draw = () => {
      const cfg = configRef.current
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particlesRef.current) {
        // speed is applied per-frame so slider changes take effect immediately
        updateParticle(p, canvas.width, canvas.height, cfg.speed)
        applyMouseInfluence(p, mouseRef.current, cfg)

        const drawX = p.x + p.springOffsetX
        const drawY = p.y + p.springOffsetY

        // Pre-rendered ring-glow halo + core, cached per (color, size, glow, dpr).
        // No gradient/arc allocation in this hot path — only a Map lookup + blit.
        const sprite = getGlowSprite(p.color, p.size, cfg.glowIntensity, dpr)
        const half = p.size + cfg.glowIntensity
        ctx.globalAlpha = p.opacity
        ctx.drawImage(sprite, drawX - half, drawY - half, half * 2, half * 2)
      }

      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResizeRef.current)
      window.removeEventListener('mousemove', onMouseMoveRef.current)
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
  }, [colorsKey, config.minSize, config.maxSize, config.glowIntensity])
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
