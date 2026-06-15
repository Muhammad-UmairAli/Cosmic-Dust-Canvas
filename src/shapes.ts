/**
 * Particle shape path builders.
 *
 * Each builder traces a shape of bounding radius `r` centred at (cx, cy) into
 * the current path of `ctx` — it does not begin the path or fill it; the caller
 * brackets the call with `beginPath()` / `fill()`. Keeping the bounding radius
 * at `r` (the same radius a circle would use) means the Task 001 ring-glow halo,
 * which rings the bounding radius, hugs every shape consistently.
 */

export type ParticleShape = 'circle' | 'star' | 'square' | 'triangle'

export function circlePath(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
): void {
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
}

/** Axis-aligned square whose corners sit on the bounding circle of radius `r`. */
export function squarePath(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
): void {
  const h = r / Math.SQRT2 // half-side: corner distance = h·√2 = r
  ctx.rect(cx - h, cy - h, 2 * h, 2 * h)
}

/** Equilateral triangle, apex up, circumradius `r`. */
export function trianglePath(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
): void {
  for (let i = 0; i < 3; i++) {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 3
    const x = cx + r * Math.cos(a)
    const y = cy + r * Math.sin(a)
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
}

/** Five-pointed star, outer radius `r`, inner radius `r/2`, top point up. */
export function starPath(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
): void {
  const spikes = 5
  const inner = r * 0.5
  for (let i = 0; i < spikes * 2; i++) {
    const rad = i % 2 === 0 ? r : inner
    const a = -Math.PI / 2 + (i * Math.PI) / spikes
    const x = cx + rad * Math.cos(a)
    const y = cy + rad * Math.sin(a)
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
}

/** Traces the path for `shape`; unknown values fall back to a circle. */
export function tracePath(
  ctx: CanvasRenderingContext2D,
  shape: ParticleShape,
  cx: number,
  cy: number,
  r: number,
): void {
  switch (shape) {
    case 'square':
      return squarePath(ctx, cx, cy, r)
    case 'triangle':
      return trianglePath(ctx, cx, cy, r)
    case 'star':
      return starPath(ctx, cx, cy, r)
    case 'circle':
    default:
      return circlePath(ctx, cx, cy, r)
  }
}
