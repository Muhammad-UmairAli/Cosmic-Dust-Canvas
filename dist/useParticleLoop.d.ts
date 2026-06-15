import { Particle } from './particles';
import { ParticleShape } from './shapes';

export interface ParticleLoopConfig {
    count: number;
    colors: string[];
    minSize: number;
    maxSize: number;
    speed: number;
    glowIntensity: number;
    mouseInfluenceRadius: number;
    mouseEffect: 'repel' | 'attract' | 'none';
    shape: ParticleShape;
    /** Opacity-pulse strength, 0 = off. Modulates draw-time alpha only. */
    twinkle: number;
    /** Palette-cycling speed, 0 = off. Particles step through `colors` over time. */
    colorCycle: number;
    /** Whether touch drag drives the same repel/attract influence as the mouse. */
    touch: boolean;
    /**
     * Escape hatch: when set, fully controls per-particle drawing and bypasses
     * the sprite cache. `ctx` is translated to the particle position (draw at the
     * origin) with globalAlpha pre-set to the particle's opacity. Overrides `shape`.
     * `p` is the live simulation particle — read its fields (size, color, opacity,
     * springOffsetX/Y) but do not mutate it, or you'll corrupt the motion.
     */
    renderParticle?: (ctx: CanvasRenderingContext2D, p: Particle) => void;
}
/**
 * Draws one particle. If `renderParticle` is set it takes precedence (ctx
 * translated to the particle, alpha pre-applied) and the sprite path is skipped;
 * otherwise the cached glow sprite for the particle's shape is blitted.
 */
export declare function drawParticle(ctx: CanvasRenderingContext2D, p: Particle, cfg: ParticleLoopConfig, dpr: number): void;
export declare function useParticleLoop(canvasRef: React.RefObject<HTMLCanvasElement>, config: ParticleLoopConfig): void;
