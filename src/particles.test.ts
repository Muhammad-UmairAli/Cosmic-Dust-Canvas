import { describe, it, expect } from 'vitest'
import { createParticle, spawnParticles, updateParticle } from './particles'

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
