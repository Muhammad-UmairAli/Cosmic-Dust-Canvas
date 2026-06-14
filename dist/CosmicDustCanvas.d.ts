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
    /** className applied to the canvas element */
    className?: string;
    /** style applied to the canvas element */
    style?: React.CSSProperties;
}
export declare function CosmicDustCanvas({ count, colors, minSize, maxSize, speed, glowIntensity, mouseInfluenceRadius, mouseEffect, className, style, }: CosmicDustCanvasProps): import("react").JSX.Element | null;
