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
    color: string;
    springOffsetX: number;
    springOffsetY: number;
}
export declare function createParticle(canvasW: number, canvasH: number, colors: string[], minSize: number, maxSize: number): Particle;
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
