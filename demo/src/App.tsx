import { useState } from 'react'
import { CosmicDustCanvas, type ParticleShape } from '../../src/index'

const INSTALL_CMD = 'npm install cosmic-dust-canvas'
const GZIP_LABEL = '≈ 9 KB gzip' // approximate published bundle size

export default function App() {
  const [count, setCount] = useState(200)
  const [speed, setSpeed] = useState(0.4)
  const [glowIntensity, setGlowIntensity] = useState(15)
  const [mouseEffect, setMouseEffect] = useState<'repel' | 'attract' | 'none'>('repel')
  const [mouseInfluenceRadius, setMouseInfluenceRadius] = useState(120)
  const [shape, setShape] = useState<ParticleShape>('circle')
  const [twinkle, setTwinkle] = useState(0)
  const [colorCycle, setColorCycle] = useState(0)
  const [touch, setTouch] = useState(true)
  const [copied, setCopied] = useState(false)

  const copyInstall = () => {
    navigator.clipboard?.writeText(INSTALL_CMD).then(() => {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <CosmicDustCanvas
        count={count}
        speed={speed}
        glowIntensity={glowIntensity}
        mouseEffect={mouseEffect}
        mouseInfluenceRadius={mouseInfluenceRadius}
        shape={shape}
        twinkle={twinkle}
        colorCycle={colorCycle}
        touch={touch}
      />

      {/* Controls panel */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          maxHeight: 'calc(100vh - 48px)',
          overflowY: 'auto',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 12,
          padding: '20px 24px',
          minWidth: 260,
          zIndex: 10,
          color: '#fff',
          fontSize: 13,
        }}
      >
        <h2
          style={{
            marginBottom: 4,
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: '-0.3px',
          }}
        >
          ✦ Cosmic Dust Canvas
        </h2>
        <p style={{ marginBottom: 18, color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>
          {count} particles · {GZIP_LABEL}
        </p>

        <label style={labelStyle}>
          Particles: <strong>{count}</strong>
          <input
            type="range"
            min={20}
            max={500}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            style={sliderStyle}
          />
        </label>

        <label style={labelStyle}>
          Speed: <strong>{speed.toFixed(2)}</strong>
          <input
            type="range"
            min={0.05}
            max={2}
            step={0.05}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            style={sliderStyle}
          />
        </label>

        <label style={labelStyle}>
          Glow intensity: <strong>{glowIntensity}</strong>
          <input
            type="range"
            min={0}
            max={40}
            value={glowIntensity}
            onChange={(e) => setGlowIntensity(Number(e.target.value))}
            style={sliderStyle}
          />
        </label>

        <label style={labelStyle}>
          Twinkle: <strong>{twinkle.toFixed(2)}</strong>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={twinkle}
            onChange={(e) => setTwinkle(Number(e.target.value))}
            style={sliderStyle}
          />
        </label>

        <label style={labelStyle}>
          Colour cycle: <strong>{colorCycle.toFixed(2)}</strong>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={colorCycle}
            onChange={(e) => setColorCycle(Number(e.target.value))}
            style={sliderStyle}
          />
        </label>

        <label style={labelStyle}>
          Mouse radius: <strong>{mouseInfluenceRadius}px</strong>
          <input
            type="range"
            min={20}
            max={300}
            value={mouseInfluenceRadius}
            onChange={(e) => setMouseInfluenceRadius(Number(e.target.value))}
            style={sliderStyle}
          />
        </label>

        <label style={rowLabelStyle}>
          Shape:
          <select
            value={shape}
            onChange={(e) => setShape(e.target.value as ParticleShape)}
            style={selectStyle}
          >
            <option value="circle">circle</option>
            <option value="star">star</option>
            <option value="square">square</option>
            <option value="triangle">triangle</option>
          </select>
        </label>

        <label style={rowLabelStyle}>
          Mouse effect:
          <select
            value={mouseEffect}
            onChange={(e) => setMouseEffect(e.target.value as typeof mouseEffect)}
            style={selectStyle}
          >
            <option value="repel">repel</option>
            <option value="attract">attract</option>
            <option value="none">none</option>
          </select>
        </label>

        <label style={rowLabelStyle}>
          Touch drag
          <input
            type="checkbox"
            checked={touch}
            onChange={(e) => setTouch(e.target.checked)}
            style={{ accentColor: '#a78bfa', width: 16, height: 16 }}
          />
        </label>

        {/* Install block — playground doubles as marketing */}
        <div
          style={{
            marginTop: 18,
            paddingTop: 16,
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <button onClick={copyInstall} style={installStyle} title="Copy to clipboard">
            <code style={{ fontFamily: 'ui-monospace, monospace' }}>$ {INSTALL_CMD}</code>
            <span style={{ color: '#a78bfa', fontSize: 11 }}>{copied ? 'copied!' : 'copy'}</span>
          </button>
        </div>
      </div>

      {/* Centre label */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.3)',
          fontSize: 12,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Move your mouse (or drag) over the canvas
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

const rowLabelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 14,
  color: 'rgba(255,255,255,0.7)',
}

const sliderStyle: React.CSSProperties = {
  width: '100%',
  accentColor: '#a78bfa',
}

const selectStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
  borderRadius: 6,
  padding: '4px 8px',
  fontSize: 12,
}

const installStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,
  width: '100%',
  background: 'rgba(0,0,0,0.35)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 8,
  padding: '8px 10px',
  color: 'rgba(255,255,255,0.85)',
  fontSize: 12,
  cursor: 'pointer',
}
