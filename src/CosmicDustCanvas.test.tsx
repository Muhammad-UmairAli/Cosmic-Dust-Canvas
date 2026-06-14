import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createRoot } from 'react-dom/client'
import { act } from 'react'
import { CosmicDustCanvas } from './CosmicDustCanvas'

beforeEach(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
    clearRect: vi.fn(),
    save: vi.fn(),
    restore: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    shadowBlur: 0,
    shadowColor: '',
    globalAlpha: 1,
    fillStyle: '',
  })
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
})
