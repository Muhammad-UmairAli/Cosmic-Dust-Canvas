export interface Particle {
  x: number
  y: number
  /** Normalized direction × base magnitude (at speed=1.0) */
  baseVx: number
  baseVy: number
  size: number
  /** Effective per-frame opacity used for drawing (twinkle modulates it). */
  opacity: number
  /** Constant base opacity; twinkle pulses `opacity` around this. */
  baseOpacity: number
  /** Phase offset (radians) so particles twinkle out of sync. */
  twinklePhase: number
  color: string
  springOffsetX: number
  springOffsetY: number
}

const FALLBACK_COLOR = '#ffffff'

/** Radians the twinkle phase advances per frame. */
const TWINKLE_SPEED = 0.05

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
  const opacity = 0.4 + Math.random() * 0.6
  return {
    x: Math.random() * canvasW,
    y: Math.random() * canvasH,
    baseVx: Math.cos(angle) * magnitude,
    baseVy: Math.sin(angle) * magnitude,
    size: safeMin + Math.random() * (safeMax - safeMin),
    opacity,
    baseOpacity: opacity,
    twinklePhase: Math.random() * Math.PI * 2,
    color: safeColors[Math.floor(Math.random() * safeColors.length)],
    springOffsetX: 0,
    springOffsetY: 0,
  }
}

/**
 * Modulates `p.opacity` for the twinkle effect. With `twinkle <= 0`, opacity is
 * pinned to `baseOpacity` exactly (no pulse). Otherwise the phase advances and
 * opacity pulses between `baseOpacity` (peak) and `baseOpacity·(1-twinkle)`
 * (trough), clamped to [0, 1]. `twinkle` is typically in [0, 1].
 */
export function applyTwinkle(p: Particle, twinkle: number): void {
  if (twinkle <= 0) {
    p.opacity = p.baseOpacity
    return
  }
  // wrap at 2π so the phase stays bounded over long sessions
  p.twinklePhase = (p.twinklePhase + TWINKLE_SPEED) % (Math.PI * 2)
  const factor = 1 - twinkle * 0.5 * (1 - Math.sin(p.twinklePhase))
  p.opacity = Math.max(0, Math.min(1, p.baseOpacity * factor))
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
