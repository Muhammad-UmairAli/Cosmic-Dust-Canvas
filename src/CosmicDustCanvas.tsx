import { useRef } from 'react'
import { useParticleLoop } from './useParticleLoop'

export interface CosmicDustCanvasProps {
  /** Number of particles to render. Default: 200 */
  count?: number
  /** Array of hex color strings for particles. Default: ['#ffffff', '#a78bfa', '#60a5fa'] */
  colors?: string[]
  /** Minimum particle radius in px. Default: 1 */
  minSize?: number
  /** Maximum particle radius in px. Default: 3 */
  maxSize?: number
  /** Drift speed multiplier. Default: 0.4 */
  speed?: number
  /** ctx.shadowBlur value controlling the softness of the glow. Default: 15 */
  glowIntensity?: number
  /** Radius in px around the cursor within which particles are influenced. Default: 120 */
  mouseInfluenceRadius?: number
  /** How particles react to the cursor. Default: 'repel' */
  mouseEffect?: 'repel' | 'attract' | 'none'
  /** className applied to the canvas element */
  className?: string
  /** style applied to the canvas element */
  style?: React.CSSProperties
}

const DEFAULT_COLORS = ['#ffffff', '#a78bfa', '#60a5fa']

const DEFAULT_STYLE: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
}

// Inner component that runs hooks unconditionally — only mounted client-side
function CosmicDustCanvasInner(props: Required<Omit<CosmicDustCanvasProps, 'className' | 'style'>> & Pick<CosmicDustCanvasProps, 'className' | 'style'>) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useParticleLoop(canvasRef, {
    count: props.count,
    colors: props.colors,
    minSize: props.minSize,
    maxSize: props.maxSize,
    speed: props.speed,
    glowIntensity: props.glowIntensity,
    mouseInfluenceRadius: props.mouseInfluenceRadius,
    mouseEffect: props.mouseEffect,
  })

  return (
    <canvas
      ref={canvasRef}
      className={props.className}
      style={{ ...DEFAULT_STYLE, ...props.style }}
    />
  )
}

export function CosmicDustCanvas({
  count = 200,
  colors = DEFAULT_COLORS,
  minSize = 1,
  maxSize = 3,
  speed = 0.4,
  glowIntensity = 15,
  mouseInfluenceRadius = 120,
  mouseEffect = 'repel',
  className,
  style,
}: CosmicDustCanvasProps) {
  // SSR guard: return null on the server without violating Rules of Hooks.
  // Inner component is only instantiated in the browser.
  if (typeof window === 'undefined') return null

  return (
    <CosmicDustCanvasInner
      count={count}
      colors={colors}
      minSize={minSize}
      maxSize={maxSize}
      speed={speed}
      glowIntensity={glowIntensity}
      mouseInfluenceRadius={mouseInfluenceRadius}
      mouseEffect={mouseEffect}
      className={className}
      style={style}
    />
  )
}
