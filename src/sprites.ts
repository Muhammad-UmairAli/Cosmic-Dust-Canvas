/**
 * Sprite cache for the particle draw loop.
 *
 * Each distinct particle appearance (the v0.1.1 ring-glow halo + solid core) is
 * pre-rendered into an offscreen <canvas> once, keyed by its visual parameters.
 * The rAF loop then `drawImage`s the cached sprite per particle instead of
 * allocating a radial gradient and issuing save/restore + two arc fills every
 * frame. The visual result is identical to v0.1.1; only the per-frame cost drops.
 */

/** Particle shape. Only 'circle' exists today; the union grows in Task 002. */
export type ParticleShape = 'circle'

/**
 * Hard ceiling on cached sprites. A normal scene needs one sprite per distinct
 * (shape, color, size, glow, dpr); this is generous headroom over any realistic
 * particle count. The bound guarantees memory stays finite even if a future
 * behaviour (e.g. colour breathing) churns the key faster than the cache is
 * cleared. Eviction is oldest-first (Map preserves insertion order).
 */
const MAX_SPRITES = 2048

const cache = new Map<string, HTMLCanvasElement>()

/**
 * Returns the cached sprite for `key`, building it once via `factory` on a miss.
 * Pure memoization — identical keys always yield the same canvas instance.
 * Evicts the oldest entry when the cache would exceed MAX_SPRITES.
 */
export function getSprite(
  key: string,
  factory: () => HTMLCanvasElement,
): HTMLCanvasElement {
  const cached = cache.get(key)
  if (cached) return cached
  const sprite = factory()
  if (cache.size >= MAX_SPRITES) {
    const oldest = cache.keys().next().value
    if (oldest !== undefined) cache.delete(oldest)
  }
  cache.set(key, sprite)
  return sprite
}

/** Drops every cached sprite. Call when a prop affecting appearance changes. */
export function clearSpriteCache(): void {
  cache.clear()
}

/** Stable cache key for a glow sprite. */
export function spriteKey(
  shape: ParticleShape,
  color: string,
  size: number,
  glowIntensity: number,
  dpr: number,
): string {
  return `${shape}|${color}|${size}|${glowIntensity}|${dpr}`
}

/**
 * Renders the v0.1.1 particle appearance into `ctx`, centred at
 * (size + glowIntensity, size + glowIntensity) in CSS pixels:
 *   • a ring-only glow halo — evenodd punches out the core area so overlapping
 *     halos at high glowIntensity don't accumulate into screen fog, and
 *   • the solid particle core.
 * At glowIntensity === 0 only the solid core is drawn.
 */
export function drawGlowSprite(
  ctx: CanvasRenderingContext2D,
  color: string,
  size: number,
  glowIntensity: number,
): void {
  const center = size + glowIntensity // sprite centre, in CSS px

  // Glow halo — ring only (evenodd hole over the core). Matches v0.1.1.
  if (glowIntensity > 0) {
    const haloR = size + glowIntensity
    const glow = ctx.createRadialGradient(center, center, size, center, center, haloR)
    glow.addColorStop(0, color)
    glow.addColorStop(1, 'transparent')
    ctx.fillStyle = glow
    ctx.beginPath()
    ctx.arc(center, center, haloR, 0, Math.PI * 2) // outer circle
    ctx.arc(center, center, size, 0, Math.PI * 2) // inner circle → evenodd hole
    ctx.fill('evenodd')
  }

  // Solid particle core
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(center, center, size, 0, Math.PI * 2)
  ctx.fill()
}

/**
 * Resolves the cached glow sprite for a particle, creating it on first use.
 * The offscreen canvas is sized 2·(size + glowIntensity) CSS px, backed at
 * `dpr` device pixels so it stays crisp on high-DPI displays. Browser-only
 * (calls document.createElement) — invoke from inside the rAF loop.
 */
export function getGlowSprite(
  color: string,
  size: number,
  glowIntensity: number,
  dpr: number,
  shape: ParticleShape = 'circle',
): HTMLCanvasElement {
  return getSprite(spriteKey(shape, color, size, glowIntensity, dpr), () => {
    const cssDim = 2 * (size + glowIntensity)
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(cssDim * dpr))
    canvas.height = canvas.width
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr) // draw in CSS px; back at device resolution
      drawGlowSprite(ctx, color, size, glowIntensity)
    }
    return canvas
  })
}
