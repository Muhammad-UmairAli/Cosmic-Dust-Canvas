import { useState } from 'react'
import { CosmicDustCanvas } from '../../src/index'

export default function App() {
  const [count, setCount] = useState(200)
  const [speed, setSpeed] = useState(0.4)
  const [glowIntensity, setGlowIntensity] = useState(15)
  const [mouseEffect, setMouseEffect] = useState<'repel' | 'attract' | 'none'>('repel')
  const [mouseInfluenceRadius, setMouseInfluenceRadius] = useState(120)

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#000', overflow: 'hidden' }}>
      <CosmicDustCanvas
        count={count}
        speed={speed}
        glowIntensity={glowIntensity}
        mouseEffect={mouseEffect}
        mouseInfluenceRadius={mouseInfluenceRadius}
      />

      {/* Controls panel */}
      <div style={{
        position: 'absolute',
        top: 24,
        right: 24,
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 12,
        padding: '20px 24px',
        minWidth: 260,
        zIndex: 10,
        color: '#fff',
        fontSize: 13,
      }}>
        <h2 style={{ marginBottom: 18, fontSize: 15, fontWeight: 600, letterSpacing: '-0.3px' }}>
          ✦ Cosmic Dust Canvas
        </h2>

        <label style={labelStyle}>
          Particles: <strong>{count}</strong>
          <input type="range" min={20} max={500} value={count}
            onChange={e => setCount(Number(e.target.value))} style={sliderStyle} />
        </label>

        <label style={labelStyle}>
          Speed: <strong>{speed.toFixed(2)}</strong>
          <input type="range" min={0.05} max={2} step={0.05} value={speed}
            onChange={e => setSpeed(Number(e.target.value))} style={sliderStyle} />
        </label>

        <label style={labelStyle}>
          Glow intensity: <strong>{glowIntensity}</strong>
          <input type="range" min={0} max={40} value={glowIntensity}
            onChange={e => setGlowIntensity(Number(e.target.value))} style={sliderStyle} />
        </label>

        <label style={labelStyle}>
          Mouse radius: <strong>{mouseInfluenceRadius}px</strong>
          <input type="range" min={20} max={300} value={mouseInfluenceRadius}
            onChange={e => setMouseInfluenceRadius(Number(e.target.value))} style={sliderStyle} />
        </label>

        <label style={{ ...labelStyle, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          Mouse effect:
          <select value={mouseEffect} onChange={e => setMouseEffect(e.target.value as typeof mouseEffect)}
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>
            <option value="repel">repel</option>
            <option value="attract">attract</option>
            <option value="none">none</option>
          </select>
        </label>
      </div>

      {/* Centre label */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.3)',
        fontSize: 12,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        Move your mouse over the canvas
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  marginBottom: 14,
  color: 'rgba(255,255,255,0.7)',
}

const sliderStyle: React.CSSProperties = {
  width: '100%',
  accentColor: '#a78bfa',
}
