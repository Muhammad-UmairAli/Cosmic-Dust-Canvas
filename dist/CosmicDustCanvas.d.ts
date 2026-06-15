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
     * Whether touch drag on mobile/tablet drives the same repel/attract influence
     * as the mouse. Default: true. Touchmove calls preventDefault (suppressing
     * page scroll) only while mouseEffect is not 'none'.
     */
    touch?: boolean;
    /**
     * Opacity-pulse strength for a shimmering effect. Useful range [0, 1]:
     * 0 = off (default), 1 = each particle softly pulses between full and dim,
     * out of sync with the others. Values are clamp-safe but > 1 just floors
     * opacity at 0 for part of the cycle. Modulates draw-time alpha only — the
     * sprite cache is unaffected.
     */
    twinkle?: number;
    /**
     * Palette-cycling speed for a colour-breathing effect. 0 = off (default).
     * Above 0 each particle slowly steps through the `colors` palette over time,
     * staggered across the field. Particles reuse the per-colour cached sprites,
     * so the cache stays bounded; needs `colors` to have 2+ entries. Changing the
     * `colors` prop while cycling resets the sprite cache (a one-frame rebuild) —
     * don't rapidly animate `colors` itself.
     */
    colorCycle?: number;
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
export declare function CosmicDustCanvas({ count, colors, minSize, maxSize, speed, glowIntensity, mouseInfluenceRadius, mouseEffect, touch, shape, twinkle, colorCycle, renderParticle, className, style, }: CosmicDustCanvasProps): import("react").JSX.Element | null;
