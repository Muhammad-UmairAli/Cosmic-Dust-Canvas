# cosmic-dust-canvas

A lightweight React component that renders hundreds of softly glowing particles drifting across the screen and reacting to the user's mouse. Drop it into any React app as an atmospheric background effect.

## Install

```bash
npm install cosmic-dust-canvas @react-spring/web
```

> `@react-spring/web` is a peer dependency — you need both.

## Usage

```tsx
import { CosmicDustCanvas } from 'cosmic-dust-canvas'

export default function App() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#000',
      }}
    >
      <CosmicDustCanvas />
      <h1 style={{ position: 'relative', zIndex: 1, color: '#fff' }}>Hello, cosmos</h1>
    </div>
  )
}
```

The canvas is `position: absolute` and fills its parent by default, so wrap it in a `position: relative` container.

## Props

| Prop                   | Type                             | Default                             | Description                                              |
| ---------------------- | -------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| `count`                | `number`                         | `200`                               | Number of particles                                      |
| `colors`               | `string[]`                       | `['#ffffff', '#a78bfa', '#60a5fa']` | Hex color strings; particles cycle through these         |
| `minSize`              | `number`                         | `1`                                 | Minimum particle radius in px                            |
| `maxSize`              | `number`                         | `3`                                 | Maximum particle radius in px                            |
| `speed`                | `number`                         | `0.4`                               | Drift speed multiplier                                   |
| `glowIntensity`        | `number`                         | `15`                                | `ctx.shadowBlur` value — higher = softer, larger glow    |
| `mouseInfluenceRadius` | `number`                         | `120`                               | Radius in px around the cursor that influences particles |
| `mouseEffect`          | `'repel' \| 'attract' \| 'none'` | `'repel'`                           | How particles react to the cursor                        |
| `className`            | `string`                         | —                                   | Applied to the `<canvas>` element                        |
| `style`                | `React.CSSProperties`            | —                                   | Applied to the `<canvas>` element                        |

## Examples

**Full-screen fixed background:**

```tsx
<CosmicDustCanvas style={{ position: 'fixed', zIndex: 0 }} />
```

**Custom colors and attraction:**

```tsx
<CosmicDustCanvas
  count={300}
  colors={['#ff6b6b', '#ffd93d', '#6bcb77']}
  mouseEffect="attract"
  speed={0.6}
  glowIntensity={20}
/>
```

**Subtle, slow effect:**

```tsx
<CosmicDustCanvas count={80} speed={0.15} glowIntensity={8} mouseEffect="none" />
```

## Peer dependencies

| Package             | Version |
| ------------------- | ------- |
| `react`             | `≥ 17`  |
| `react-dom`         | `≥ 17`  |
| `@react-spring/web` | `≥ 9`   |

## License

MIT
