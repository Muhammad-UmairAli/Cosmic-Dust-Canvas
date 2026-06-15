import { ParticleShape } from './shapes';
import { Particle } from './particles';

export interface CosmicDustCanvasProps {
    /** Number of particles to render. Default: 200 */
    count?: number;
    /** Array of hex color strings for particles. Default: ['#ffffff', '#a78bfa', '#60a5fa'] */
    colors?: string[];
    /** Minimum particle radius in px. Default: 1 */
    minSize?: number;
    /** Maximum particle radius in px. Default: 3 */
    maxSize?: number;
    /** Drift speed multiplier. Default: 0.4 */
    speed?: number;
    /** ctx.shadowBlur value controlling the softness of the glow. Default: 15 */
    glowIntensity?: number;
    /** Radius in px around the cursor within which particles are influenced. Default: 120 */
    mouseInfluenceRadius?: number;
    /** How particles react to the cursor. Default: 'repel' */
    mouseEffect?: 'repel' | 'attract' | 'none';
    /**
     * Built-in particle shape. Default: 'circle'. Non-circle shapes share the
     * circular bounding-radius glow halo (visible in concave regions, e.g.
     * between star spikes).
     */
    shape?: ParticleShape;
    /**
     * Escape hatch for fully custom drawing. When provided it overrides `shape`
     * and bypasses the sprite cache: the canvas context is translated to each
     * particle's position (draw at the origin) with globalAlpha pre-set to the
     * particle's opacity. `p` is the live particle — read it, don't mutate it.
     */
    renderParticle?: (ctx: CanvasRenderingContext2D, p: Particle) => void;
    /** className applied to the canvas element */
    className?: string;
    /** style applied to the canvas element */
    style?: React.CSSProperties;
}
export declare function CosmicDustCanvas({ count, colors, minSize, maxSize, speed, glowIntensity, mouseInfluenceRadius, mouseEffect, shape, renderParticle, className, style, }: CosmicDustCanvasProps): import("react").JSX.Element | null;
