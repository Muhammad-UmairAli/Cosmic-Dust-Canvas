export interface Particle {
  x: number
  y: number
  vx: number
  vy: number
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
  speed: number,
): Particle {
  const safeColors = colors.length > 0 ? colors : [FALLBACK_COLOR]
  const safeMin = Math.min(minSize, maxSize)
  const safeMax = Math.max(minSize, maxSize)
  const angle = Math.random() * Math.PI * 2
  const magnitude = (0.2 + Math.random() * 0.8) * speed
  return {
    x: Math.random() * canvasW,
    y: Math.random() * canvasH,
    vx: Math.cos(angle) * magnitude,
    vy: Math.sin(angle) * magnitude,
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
  speed: number,
): Particle[] {
  return Array.from({ length: count }, () =>
    createParticle(canvasW, canvasH, colors, minSize, maxSize, speed),
  )
}

export function updateParticle(p: Particle, canvasW: number, canvasH: number): void {
  p.x += p.vx
  p.y += p.vy

  if (p.x < -p.size) p.x = canvasW + p.size
  else if (p.x > canvasW + p.size) p.x = -p.size

  if (p.y < -p.size) p.y = canvasH + p.size
  else if (p.y > canvasH + p.size) p.y = -p.size
}
