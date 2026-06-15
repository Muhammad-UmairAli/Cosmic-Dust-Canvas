import { ParticleShape } from './shapes';

export type { ParticleShape };
/**
 * Returns the cached sprite for `key`, building it once via `factory` on a miss.
 * Pure memoization — identical keys always yield the same canvas instance.
 * Evicts the oldest entry when the cache would exceed MAX_SPRITES.
 */
export declare function getSprite(key: string, factory: () => HTMLCanvasElement): HTMLCanvasElement;
/** Drops every cached sprite. Call when a prop affecting appearance changes. */
export declare function clearSpriteCache(): void;
/** Stable cache key for a glow sprite. */
export declare function spriteKey(shape: ParticleShape, color: string, size: number, glowIntensity: number, dpr: number): string;
/**
 * Renders the particle appearance into `ctx`, centred at
 * (size + glowIntensity, size + glowIntensity) in CSS pixels:
 *   • a ring-only glow halo — evenodd punches out the bounding-radius circle so
 *     overlapping halos at high glowIntensity don't accumulate into screen fog,
 *     and rings every shape consistently at its bounding radius, and
 *   • the solid particle core in the chosen `shape`.
 * At glowIntensity === 0 only the solid core is drawn. `shape='circle'` is
 * identical to v0.1.1.
 */
export declare function drawGlowSprite(ctx: CanvasRenderingContext2D, color: string, size: number, glowIntensity: number, shape?: ParticleShape): void;
/**
 * Resolves the cached glow sprite for a particle, creating it on first use.
 * The offscreen canvas is sized 2·(size + glowIntensity) CSS px, backed at
 * `dpr` device pixels so it stays crisp on high-DPI displays. Browser-only
 * (calls document.createElement) — invoke from inside the rAF loop.
 */
export declare function getGlowSprite(color: string, size: number, glowIntensity: number, dpr: number, shape?: ParticleShape): HTMLCanvasElement;
