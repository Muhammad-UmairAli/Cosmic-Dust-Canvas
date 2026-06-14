export interface ParticleLoopConfig {
    count: number;
    colors: string[];
    minSize: number;
    maxSize: number;
    speed: number;
    glowIntensity: number;
    mouseInfluenceRadius: number;
    mouseEffect: 'repel' | 'attract' | 'none';
}
export declare function useParticleLoop(canvasRef: React.RefObject<HTMLCanvasElement>, config: ParticleLoopConfig): void;
