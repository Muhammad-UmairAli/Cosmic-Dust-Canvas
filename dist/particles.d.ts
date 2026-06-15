export interface Particle {
    x: number;
    y: number;
    /** Normalized direction × base magnitude (at speed=1.0) */
    baseVx: number;
    baseVy: number;
    size: number;
    /** Effective per-frame opacity used for drawing (twinkle modulates it). */
    opacity: number;
    /** Constant base opacity; twinkle pulses `opacity` around this. */
    baseOpacity: number;
    /** Phase offset (radians) so particles twinkle out of sync. */
    twinklePhase: number;
    /** Resolved current colour (kept in sync with colors[colorIndex] when cycling). */
    color: string;
    /** Index into the `colors` palette; advanced by colour breathing. */
    colorIndex: number;
    /** Fractional progress [0,1) toward the next palette slot; staggered at spawn. */
    colorPhase: number;
    springOffsetX: number;
    springOffsetY: number;
}
export declare function createParticle(canvasW: number, canvasH: number, colors: string[], minSize: number, maxSize: number): Particle;
/**
 * Advances colour breathing. With `colorCycle <= 0` (or a palette of < 2
 * colours) the particle keeps its spawn colour exactly. Otherwise the phase
 * advances; each time it crosses a slot boundary `colorIndex` steps to the next
 * palette colour (modulo length) and `p.color` is re-resolved — so the particle
 * just references a different cached sprite, never a freshly built one.
 */
export declare function applyColorCycle(p: Particle, colors: string[], colorCycle: number): void;
/**
 * Modulates `p.opacity` for the twinkle effect. With `twinkle <= 0`, opacity is
 * pinned to `baseOpacity` exactly (no pulse). Otherwise the phase advances and
 * opacity pulses between `baseOpacity` (peak) and `baseOpacity·(1-twinkle)`
 * (trough), clamped to [0, 1]. `twinkle` is typically in [0, 1].
 */
export declare function applyTwinkle(p: Particle, twinkle: number): void;
export declare function spawnParticles(count: number, canvasW: number, canvasH: number, colors: string[], minSize: number, maxSize: number): Particle[];
/** Advances position by velocity scaled by current speed. Wraps at canvas edges. */
export declare function updateParticle(p: Particle, canvasW: number, canvasH: number, speed: number): void;
