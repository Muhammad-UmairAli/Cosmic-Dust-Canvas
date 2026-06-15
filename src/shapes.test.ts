import { describe, it, expect, vi } from 'vitest'
import {
  circlePath,
  squarePath,
  trianglePath,
  starPath,
  tracePath,
} from './shapes'

function ctxMock() {
  return {
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    arc: vi.fn(),
    rect: vi.fn(),
    closePath: vi.fn(),
  }
}

type Ctx = ReturnType<typeof ctxMock>
const cmdCount = (c: Ctx) =>
  c.moveTo.mock.calls.length +
  c.lineTo.mock.calls.length +
  c.arc.mock.calls.length +
  c.rect.mock.calls.length

describe('shape path builders', () => {
  it('circlePath traces a single arc', () => {
    const c = ctxMock()
    circlePath(c as never, 10, 10, 5)
    expect(c.arc).toHaveBeenCalledTimes(1)
    expect(cmdCount(c)).toBeGreaterThan(0)
  })

  it('squarePath traces a rect inside the bounding radius', () => {
    const c = ctxMock()
    squarePath(c as never, 10, 10, 5)
    expect(c.rect).toHaveBeenCalledTimes(1)
    const [, , w, h] = c.rect.mock.calls[0]
    // corner distance = (w/2)·√2 should equal the bounding radius (5)
    expect((w / 2) * Math.SQRT2).toBeCloseTo(5)
    expect(w).toBeCloseTo(h)
  })

  it('trianglePath traces 3 vertices and closes', () => {
    const c = ctxMock()
    trianglePath(c as never, 10, 10, 5)
    expect(c.moveTo).toHaveBeenCalledTimes(1)
    expect(c.lineTo).toHaveBeenCalledTimes(2)
    expect(c.closePath).toHaveBeenCalledTimes(1)
  })

  it('starPath traces 10 points (5 outer + 5 inner) and closes', () => {
    const c = ctxMock()
    starPath(c as never, 10, 10, 5)
    expect(c.moveTo).toHaveBeenCalledTimes(1)
    expect(c.lineTo).toHaveBeenCalledTimes(9)
    expect(c.closePath).toHaveBeenCalledTimes(1)
  })

  it('every builder produces a non-empty path', () => {
    for (const build of [circlePath, squarePath, trianglePath, starPath]) {
      const c = ctxMock()
      build(c as never, 0, 0, 4)
      expect(cmdCount(c)).toBeGreaterThan(0)
    }
  })
})

describe('tracePath', () => {
  it('dispatches to the named shape', () => {
    const c = ctxMock()
    tracePath(c as never, 'star', 0, 0, 5)
    expect(c.lineTo).toHaveBeenCalledTimes(9) // star signature
  })

  it('falls back to a circle for circle / unknown', () => {
    const c = ctxMock()
    tracePath(c as never, 'circle', 0, 0, 5)
    expect(c.arc).toHaveBeenCalledTimes(1)

    const c2 = ctxMock()
    tracePath(c2 as never, 'pentagon' as never, 0, 0, 5)
    expect(c2.arc).toHaveBeenCalledTimes(1)
  })
})
