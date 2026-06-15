import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  getSprite,
  getGlowSprite,
  clearSpriteCache,
  spriteKey,
} from './sprites'

const makeCanvas = () => document.createElement('canvas')

// jsdom has no real 2D context — stub the calls drawGlowSprite/getGlowSprite make.
// Kept module-level so tests can assert which draw calls fired.
let ctxMock: ReturnType<typeof makeCtxMock>
function makeCtxMock() {
  return {
    scale: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    createRadialGradient: vi.fn().mockReturnValue({ addColorStop: vi.fn() }),
    fillStyle: '',
  }
}

beforeEach(() => {
  clearSpriteCache()
  ctxMock = makeCtxMock()
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue(ctxMock)
})

describe('getSprite', () => {
  it('returns the same cached instance for identical keys', () => {
    const a = getSprite('k', makeCanvas)
    const b = getSprite('k', makeCanvas)
    expect(b).toBe(a)
  })

  it('returns distinct instances for differing keys', () => {
    const a = getSprite('k1', makeCanvas)
    const b = getSprite('k2', makeCanvas)
    expect(b).not.toBe(a)
  })

  it('invokes the factory only on a cache miss', () => {
    let calls = 0
    const factory = () => {
      calls++
      return makeCanvas()
    }
    getSprite('k', factory)
    getSprite('k', factory)
    expect(calls).toBe(1)
  })
})

describe('clearSpriteCache', () => {
  it('forces a rebuild after clearing', () => {
    clearSpriteCache()
    const a = getSprite('k', makeCanvas)
    clearSpriteCache()
    const b = getSprite('k', makeCanvas)
    expect(b).not.toBe(a)
  })
})

describe('spriteKey', () => {
  it('is stable for identical parameters', () => {
    expect(spriteKey('circle', '#fff', 2, 10, 2)).toBe(
      spriteKey('circle', '#fff', 2, 10, 2),
    )
  })

  it('differs when any visual parameter differs', () => {
    const base = spriteKey('circle', '#fff', 2, 10, 2)
    expect(spriteKey('circle', '#000', 2, 10, 2)).not.toBe(base) // color
    expect(spriteKey('circle', '#fff', 3, 10, 2)).not.toBe(base) // size
    expect(spriteKey('circle', '#fff', 2, 15, 2)).not.toBe(base) // glow
    expect(spriteKey('circle', '#fff', 2, 10, 1)).not.toBe(base) // dpr
  })
})

describe('getGlowSprite', () => {
  it('caches by visual parameters', () => {
    const a = getGlowSprite('#fff', 2, 10, 2)
    const b = getGlowSprite('#fff', 2, 10, 2)
    expect(b).toBe(a)
  })

  it('builds a distinct sprite when size differs', () => {
    const a = getGlowSprite('#fff', 2, 10, 2)
    const c = getGlowSprite('#fff', 3, 10, 2)
    expect(c).not.toBe(a)
  })

  it('sizes the backing canvas to 2·(size + glow)·dpr', () => {
    const sprite = getGlowSprite('#fff', 2, 10, 2)
    expect(sprite.width).toBe(Math.round(2 * (2 + 10) * 2)) // 48
    expect(sprite.height).toBe(sprite.width)
  })

  it('stays at least 1px when size and glow are zero', () => {
    const sprite = getGlowSprite('#fff', 0, 0, 1)
    expect(sprite.width).toBeGreaterThanOrEqual(1)
  })

  it('rounds the backing canvas at fractional dpr', () => {
    const sprite = getGlowSprite('#fff', 2, 10, 1.5)
    expect(sprite.width).toBe(Math.round(2 * (2 + 10) * 1.5)) // 36
  })

  it('draws no glow gradient when glowIntensity is 0 (core only)', () => {
    getGlowSprite('#fff', 2, 0, 1)
    expect(ctxMock.createRadialGradient).not.toHaveBeenCalled()
    expect(ctxMock.arc).toHaveBeenCalledTimes(1) // core only
  })

  it('draws one glow gradient plus the core when glowIntensity > 0', () => {
    getGlowSprite('#fff', 2, 10, 1)
    expect(ctxMock.createRadialGradient).toHaveBeenCalledTimes(1)
    expect(ctxMock.arc).toHaveBeenCalledTimes(3) // outer + hole + core
  })
})

describe('cache bound', () => {
  it('evicts oldest entries instead of growing without limit', () => {
    const first = getSprite('first', makeCanvas)
    for (let i = 0; i < 2100; i++) getSprite(`k${i}`, makeCanvas)
    // 'first' was inserted before the 2048-entry ceiling and has been evicted,
    // so requesting it again builds a fresh instance.
    const firstAgain = getSprite('first', makeCanvas)
    expect(firstAgain).not.toBe(first)
  })
})
