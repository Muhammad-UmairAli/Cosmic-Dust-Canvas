export interface Particle {
    x: number;
    y: number;
    /** Normalized direction × base magnitude (at speed=1.0) */
    baseVx: number;
    baseVy: number;
    size: number;
    opacity: number;
    color: string;
    springOffsetX: number;
    springOffsetY: number;
}
export declare function createParticle(canvasW: number, canvasH: number, colors: string[], minSize: number, maxSize: number): Particle;
export declare function spawnParticles(count: number, canvasW: number, canvasH: number, colors: string[], minSize: number, maxSize: number): Particle[];
/** Advances position by velocity scaled by current speed. Wraps at canvas edges. */
export declare function updateParticle(p: Particle, canvasW: number, canvasH: number, speed: number): void;
