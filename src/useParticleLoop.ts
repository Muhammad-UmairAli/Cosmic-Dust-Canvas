import { useEffect, useRef } from 'react'
import { spawnParticles, updateParticle, type Particle } from './particles'

const SPRING_CLAMP = 60

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
  // Always-current config ref so the rAF closure never reads stale props
  const configRef = useRef<ParticleLoopConfig>(config)
  configRef.current = config

  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)
  // Stable handler refs so addEventListener/removeEventListener use the same function identity
  const onResizeRef = useRef<() => void>(() => undefined)
  const onMouseMoveRef = useRef<(e: MouseEvent) => void>(() => undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      const parent = canvas.parentElement
      const w = parent ? parent.clientWidth : window.innerWidth
      const h = parent ? parent.clientHeight : window.innerHeight
      canvas.width = w
      canvas.height = h
    }

    setSize()
    const { count, colors, minSize, maxSize, speed } = configRef.current
    particlesRef.current = spawnParticles(count, canvas.width, canvas.height, colors, minSize, maxSize, speed)

    // Cache gradients per color to avoid per-frame allocations
    const gradientCache = new Map<string, CanvasGradient>()
    const getGradient = (color: string, x: number, y: number, size: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, size)
      g.addColorStop(0, color)
      g.addColorStop(1, 'transparent')
      return g
    }

    onResizeRef.current = () => {
      const prevW = canvas.width
      const prevH = canvas.height
      setSize()
      gradientCache.clear()
      const scaleX = canvas.width / prevW
      const scaleY = canvas.height / prevH
      for (const p of particlesRef.current) {
        p.x *= scaleX
        p.y *= scaleY
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
        updateParticle(p, canvas.width, canvas.height)
        applyMouseInfluence(p, mouseRef.current, cfg)

        const drawX = p.x + p.springOffsetX
        const drawY = p.y + p.springOffsetY

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.shadowBlur = cfg.glowIntensity
        ctx.shadowColor = p.color
        ctx.fillStyle = getGradient(p.color, drawX, drawY, p.size)
        ctx.beginPath()
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResizeRef.current)
      window.removeEventListener('mousemove', onMouseMoveRef.current)
    }
  }, [canvasRef])
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

  const dx = (p.x + p.springOffsetX) - mouse.x
  const dy = (p.y + p.springOffsetY) - mouse.y
  const dist = Math.sqrt(dx * dx + dy * dy)

  if (dist < config.mouseInfluenceRadius && dist > 0) {
    const force = (config.mouseInfluenceRadius - dist) / config.mouseInfluenceRadius
    const dir = config.mouseEffect === 'repel' ? 1 : -1
    p.springOffsetX += (dx / dist) * force * 3 * dir
    p.springOffsetY += (dy / dist) * force * 3 * dir
  }

  p.springOffsetX *= 0.92
  p.springOffsetY *= 0.92

  // Clamp to prevent particles drifting too far from their natural position
  p.springOffsetX = Math.max(-SPRING_CLAMP, Math.min(SPRING_CLAMP, p.springOffsetX))
  p.springOffsetY = Math.max(-SPRING_CLAMP, Math.min(SPRING_CLAMP, p.springOffsetY))
}
