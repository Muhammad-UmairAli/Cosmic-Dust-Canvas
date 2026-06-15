import { describe, it, expect, vi, beforeEach } from 'vitest'
import { drawParticle, type ParticleLoopConfig } from './useParticleLoop'
import { clearSpriteCache } from './sprites'
import type { Particle } from './particles'

const makeParticle = (over: Partial<Particle> = {}): Particle => ({
  x: 100,
  y: 50,
  baseVx: 0,
  baseVy: 0,
  size: 3,
  opacity: 0.7,
  color: '#fff',
  springOffsetX: 0,
  springOffsetY: 0,
  ...over,
})

const makeCfg = (over: Partial<ParticleLoopConfig> = {}): ParticleLoopConfig => ({
  count: 1,
  colors: ['#fff'],
  minSize: 1,
  maxSize: 3,
  speed: 1,
  glowIntensity: 10,
  mouseInfluenceRadius: 120,
  mouseEffect: 'none',
  shape: 'circle',
  ...over,
})

const makeMainCtx = () => ({
  save: vi.fn(),
  restore: vi.fn(),
  translate: vi.fn(),
  drawImage: vi.fn(),
  globalAlpha: 1,
})

beforeEach(() => {
  clearSpriteCache()
  // jsdom has no real 2D context — stub what sprite creation calls.
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
    scale: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    rect: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    closePath: vi.fn(),
    createRadialGradient: vi.fn().mockReturnValue({ addColorStop: vi.fn() }),
    fillStyle: '',
  })
})

describe('drawParticle — renderParticle precedence', () => {
  it('calls renderParticle and skips the sprite blit when provided', () => {
    const renderParticle = vi.fn()
    const ctx = makeMainCtx()
    const p = makeParticle({ springOffsetX: 4, springOffsetY: -2 })
    drawParticle(ctx as never, p, makeCfg({ renderParticle }), 1)

    expect(renderParticle).toHaveBeenCalledTimes(1)
    expect(renderParticle).toHaveBeenCalledWith(ctx, p)
    expect(ctx.translate).toHaveBeenCalledWith(104, 48) // x+off, y+off
    expect(ctx.globalAlpha).toBe(0.7)
    expect(ctx.drawImage).not.toHaveBeenCalled()
    // balanced save/restore isolates the callback's ctx mutations
    expect(ctx.save).toHaveBeenCalledTimes(1)
    expect(ctx.restore).toHaveBeenCalledTimes(1)
  })

  it('blits a cached sprite when renderParticle is absent', () => {
    const ctx = makeMainCtx()
    drawParticle(ctx as never, makeParticle(), makeCfg({ shape: 'star' }), 1)

    expect(ctx.drawImage).toHaveBeenCalledTimes(1)
    expect(ctx.globalAlpha).toBe(0.7)
    expect(ctx.translate).not.toHaveBeenCalled()
  })

  it('blits centred on the particle with the bounding-radius footprint', () => {
    const ctx = makeMainCtx()
    const p = makeParticle({ x: 100, y: 50, size: 3 })
    drawParticle(ctx as never, p, makeCfg({ glowIntensity: 10 }), 1)

    const half = 3 + 10
    const [, dx, dy, w, h] = ctx.drawImage.mock.calls[0]
    expect(dx).toBe(100 - half)
    expect(dy).toBe(50 - half)
    expect(w).toBe(half * 2)
    expect(h).toBe(half * 2)
  })
})
