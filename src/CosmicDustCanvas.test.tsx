import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createRoot } from 'react-dom/client'
import { act } from 'react'
import { CosmicDustCanvas } from './CosmicDustCanvas'

let ctxMock: ReturnType<typeof makeCtxMock>
function makeCtxMock() {
  return {
    setTransform: vi.fn(),
    scale: vi.fn(),
    clearRect: vi.fn(),
    save: vi.fn(),
    restore: vi.fn(),
    translate: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    rect: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    closePath: vi.fn(),
    fill: vi.fn(),
    drawImage: vi.fn(),
    createRadialGradient: vi.fn().mockReturnValue({ addColorStop: vi.fn() }),
    globalAlpha: 1,
    fillStyle: '',
  }
}

beforeEach(() => {
  ctxMock = makeCtxMock()
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue(ctxMock)
})

describe('CosmicDustCanvas', () => {
  it('renders a canvas element', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const root = createRoot(div)
    act(() => {
      root.render(<CosmicDustCanvas />)
    })
    expect(div.querySelector('canvas')).not.toBeNull()
    act(() => {
      root.unmount()
    })
    div.remove()
  })

  it('unmounts without throwing', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const root = createRoot(div)
    expect(() => {
      act(() => {
        root.render(<CosmicDustCanvas />)
      })
      act(() => {
        root.unmount()
      })
    }).not.toThrow()
    div.remove()
  })

  it('accepts count prop without TypeScript error', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const root = createRoot(div)
    act(() => {
      root.render(<CosmicDustCanvas count={50} />)
    })
    expect(div.querySelector('canvas')).not.toBeNull()
    act(() => {
      root.unmount()
    })
    div.remove()
  })

  const touchEvents = (calls: unknown[][]) =>
    calls.map((c) => String(c[0])).filter((name) => name.startsWith('touch'))

  it('adds touch listeners by default and removes them on unmount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const div = document.createElement('div')
    document.body.appendChild(div)
    const root = createRoot(div)
    act(() => {
      root.render(<CosmicDustCanvas />)
    })
    const added = touchEvents(addSpy.mock.calls)
    expect(added).toEqual(
      expect.arrayContaining(['touchstart', 'touchmove', 'touchend', 'touchcancel']),
    )
    act(() => {
      root.unmount()
    })
    const removed = touchEvents(removeSpy.mock.calls)
    // add/remove symmetric — no listener leak
    expect(removed.sort()).toEqual(added.sort())
    addSpy.mockRestore()
    removeSpy.mockRestore()
    div.remove()
  })

  it('backs the canvas at device resolution and dpr-scales the context (hi-DPI fix)', () => {
    const origDpr = window.devicePixelRatio
    Object.defineProperty(window, 'devicePixelRatio', { value: 2, configurable: true })
    const div = document.createElement('div')
    Object.defineProperty(div, 'clientWidth', { value: 800, configurable: true })
    Object.defineProperty(div, 'clientHeight', { value: 600, configurable: true })
    document.body.appendChild(div)
    const root = createRoot(div)
    act(() => {
      root.render(<CosmicDustCanvas />)
    })
    const canvas = div.querySelector('canvas') as HTMLCanvasElement
    // backing store is CSS size × dpr (so the browser doesn't upscale → blur)
    expect(canvas.width).toBe(1600)
    expect(canvas.height).toBe(1200)
    // context scaled by dpr so drawing stays in CSS coordinates
    expect(ctxMock.setTransform).toHaveBeenCalledWith(2, 0, 0, 2, 0, 0)
    act(() => {
      root.unmount()
    })
    div.remove()
    Object.defineProperty(window, 'devicePixelRatio', {
      value: origDpr,
      configurable: true,
    })
  })

  it('adds no touch listeners when touch={false}', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const div = document.createElement('div')
    document.body.appendChild(div)
    const root = createRoot(div)
    act(() => {
      root.render(<CosmicDustCanvas touch={false} />)
    })
    expect(touchEvents(addSpy.mock.calls)).toHaveLength(0)
    act(() => {
      root.unmount()
    })
    addSpy.mockRestore()
    div.remove()
  })
})
