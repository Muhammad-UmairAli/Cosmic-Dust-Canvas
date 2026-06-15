/**
 * Particle shape path builders.
 *
 * Each builder traces a shape of bounding radius `r` centred at (cx, cy) into
 * the current path of `ctx` — it does not begin the path or fill it; the caller
 * brackets the call with `beginPath()` / `fill()`. Keeping the bounding radius
 * at `r` (the same radius a circle would use) means the Task 001 ring-glow halo,
 * which rings the bounding radius, hugs every shape consistently.
 */
export type ParticleShape = 'circle' | 'star' | 'square' | 'triangle';
export declare function circlePath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number): void;
/** Axis-aligned square whose corners sit on the bounding circle of radius `r`. */
export declare function squarePath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number): void;
/** Equilateral triangle, apex up, circumradius `r`. */
export declare function trianglePath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number): void;
/** Five-pointed star, outer radius `r`, inner radius `r/2`, top point up. */
export declare function starPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number): void;
/** Traces the path for `shape`; unknown values fall back to a circle. */
export declare function tracePath(ctx: CanvasRenderingContext2D, shape: ParticleShape, cx: number, cy: number, r: number): void;
