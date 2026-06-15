import { describe, it, expect } from 'vitest'
import {
  createParticle,
  spawnParticles,
  updateParticle,
  applyTwinkle,
} from './particles'

const COLORS = ['#ffffff', '#a78bfa', '#60a5fa']
const W = 800
const H = 600

describe('createParticle', () => {
  it('returns a particle with position within canvas bounds', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    expect(p.x).toBeGreaterThanOrEqual(0)
    expect(p.x).toBeLessThanOrEqual(W)
    expect(p.y).toBeGreaterThanOrEqual(0)
    expect(p.y).toBeLessThanOrEqual(H)
  })

  it('returns a particle with size within [minSize, maxSize]', () => {
    for (let i = 0; i < 20; i++) {
      const p = createParticle(W, H, COLORS, 1, 3)
      expect(p.size).toBeGreaterThanOrEqual(1)
      expect(p.size).toBeLessThanOrEqual(3)
    }
  })

  it('returns a particle with opacity in [0.4, 1]', () => {
    for (let i = 0; i < 20; i++) {
      const p = createParticle(W, H, COLORS, 1, 3)
      expect(p.opacity).toBeGreaterThanOrEqual(0.4)
      expect(p.opacity).toBeLessThanOrEqual(1)
    }
  })

  it('picks color from the provided colors array', () => {
    for (let i = 0; i < 30; i++) {
      const p = createParticle(W, H, COLORS, 1, 3)
      expect(COLORS).toContain(p.color)
    }
  })

  it('initialises springOffset to zero', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    expect(p.springOffsetX).toBe(0)
    expect(p.springOffsetY).toBe(0)
  })

  it('seeds baseOpacity equal to opacity and twinklePhase in [0, 2π)', () => {
    for (let i = 0; i < 20; i++) {
      const p = createParticle(W, H, COLORS, 1, 3)
      expect(p.baseOpacity).toBe(p.opacity)
      expect(p.twinklePhase).toBeGreaterThanOrEqual(0)
      expect(p.twinklePhase).toBeLessThan(Math.PI * 2)
    }
  })

  it('falls back to white when colors array is empty', () => {
    const p = createParticle(W, H, [], 1, 3)
    expect(p.color).toBe('#ffffff')
  })

  it('handles minSize > maxSize without negative radius', () => {
    const p = createParticle(W, H, COLORS, 10, 2)
    expect(p.size).toBeGreaterThanOrEqual(2)
    expect(p.size).toBeLessThanOrEqual(10)
  })
})

describe('updateParticle', () => {
  it('advances position by baseVx * speed each call', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    const x0 = p.x
    const y0 = p.y
    p.baseVx = 1
    p.baseVy = 2
    updateParticle(p, W, H, 1.0)
    expect(p.x).toBeCloseTo(x0 + 1)
    expect(p.y).toBeCloseTo(y0 + 2)
  })

  it('scales movement by speed multiplier', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.baseVx = 1
    p.baseVy = 0
    const x0 = p.x
    updateParticle(p, W, H, 2.0)
    expect(p.x).toBeCloseTo(x0 + 2)
  })

  it('wraps x when it exceeds canvas width', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.x = W + p.size + 1
    p.baseVx = 1
    p.baseVy = 0
    updateParticle(p, W, H, 1.0)
    expect(p.x).toBeLessThan(0)
  })

  it('wraps y when it exceeds canvas height', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.y = H + p.size + 1
    p.baseVx = 0
    p.baseVy = 1
    updateParticle(p, W, H, 1.0)
    expect(p.y).toBeLessThan(0)
  })
})

describe('spawnParticles', () => {
  it('returns exactly the requested count', () => {
    const particles = spawnParticles(150, W, H, COLORS, 1, 3)
    expect(particles).toHaveLength(150)
  })

  it('returns an empty array for count 0', () => {
    expect(spawnParticles(0, W, H, COLORS, 1, 3)).toHaveLength(0)
  })
})

describe('applyTwinkle', () => {
  it('pins opacity to baseOpacity when twinkle is 0', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.opacity = 0.123 // perturb to prove it gets reset
    p.twinklePhase = 1.5
    applyTwinkle(p, 0)
    expect(p.opacity).toBe(p.baseOpacity)
    expect(p.twinklePhase).toBe(1.5) // phase does not advance when off
  })

  it('keeps opacity within [0, 1] across a full phase sweep', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.baseOpacity = 1
    for (let i = 0; i < 400; i++) {
      applyTwinkle(p, 1)
      expect(p.opacity).toBeGreaterThanOrEqual(0)
      expect(p.opacity).toBeLessThanOrEqual(1)
    }
  })

  it('advances the phase when twinkle > 0', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.twinklePhase = 1 // deterministic start, away from the 2π wrap
    applyTwinkle(p, 1)
    expect(p.twinklePhase).toBeGreaterThan(1)
  })

  it('keeps the phase bounded below 2π', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.twinklePhase = Math.PI * 2 - 0.01 // just under a full turn
    applyTwinkle(p, 1)
    expect(p.twinklePhase).toBeLessThan(Math.PI * 2)
  })

  it('pulses particles independently (out of sync)', () => {
    const a = createParticle(W, H, COLORS, 1, 3)
    const b = createParticle(W, H, COLORS, 1, 3)
    a.baseOpacity = b.baseOpacity = 1
    a.twinklePhase = 0
    b.twinklePhase = Math.PI / 2 // a quarter-cycle apart
    applyTwinkle(a, 1)
    applyTwinkle(b, 1)
    expect(a.opacity).not.toBeCloseTo(b.opacity, 5)
  })

  it('peaks at baseOpacity (never brightens above it)', () => {
    const p = createParticle(W, H, COLORS, 1, 3)
    p.baseOpacity = 0.6
    let max = 0
    for (let i = 0; i < 400; i++) {
      applyTwinkle(p, 1)
      max = Math.max(max, p.opacity)
    }
    expect(max).toBeLessThanOrEqual(0.6 + 1e-9)
  })
})
