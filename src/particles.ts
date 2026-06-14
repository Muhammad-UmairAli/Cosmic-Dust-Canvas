export interface Particle {
  x: number
  y: number
  /** Normalized direction × base magnitude (at speed=1.0) */
  baseVx: number
  baseVy: number
  size: number
  opacity: number
  color: string
  springOffsetX: number
  springOffsetY: number
}

const FALLBACK_COLOR = '#ffffff'

export function createParticle(
  canvasW: number,
  canvasH: number,
  colors: string[],
  minSize: number,
  maxSize: number,
): Particle {
  const safeColors = colors.length > 0 ? colors : [FALLBACK_COLOR]
  const safeMin = Math.min(minSize, maxSize)
  const safeMax = Math.max(minSize, maxSize)
  const angle = Math.random() * Math.PI * 2
  const magnitude = 0.2 + Math.random() * 0.8
  return {
    x: Math.random() * canvasW,
    y: Math.random() * canvasH,
    baseVx: Math.cos(angle) * magnitude,
    baseVy: Math.sin(angle) * magnitude,
    size: safeMin + Math.random() * (safeMax - safeMin),
    opacity: 0.4 + Math.random() * 0.6,
    color: safeColors[Math.floor(Math.random() * safeColors.length)],
    springOffsetX: 0,
    springOffsetY: 0,
  }
}

export function spawnParticles(
  count: number,
  canvasW: number,
  canvasH: number,
  colors: string[],
  minSize: number,
  maxSize: number,
): Particle[] {
  return Array.from({ length: count }, () =>
    createParticle(canvasW, canvasH, colors, minSize, maxSize),
  )
}

/** Advances position by velocity scaled by current speed. Wraps at canvas edges. */
export function updateParticle(
  p: Particle,
  canvasW: number,
  canvasH: number,
  speed: number,
): void {
  p.x += p.baseVx * speed
  p.y += p.baseVy * speed

  if (p.x < -p.size) p.x = canvasW + p.size
  else if (p.x > canvasW + p.size) p.x = -p.size

  if (p.y < -p.size) p.y = canvasH + p.size
  else if (p.y > canvasH + p.size) p.y = -p.size
}
