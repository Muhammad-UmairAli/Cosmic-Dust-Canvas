export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    springOffsetX: number;
    springOffsetY: number;
}
export declare function createParticle(canvasW: number, canvasH: number, colors: string[], minSize: number, maxSize: number, speed: number): Particle;
export declare function spawnParticles(count: number, canvasW: number, canvasH: number, colors: string[], minSize: number, maxSize: number, speed: number): Particle[];
export declare function updateParticle(p: Particle, canvasW: number, canvasH: number): void;
