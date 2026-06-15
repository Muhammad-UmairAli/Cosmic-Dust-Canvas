# cosmic-dust-canvas

A lightweight React component that renders hundreds of softly glowing particles drifting across the screen and reacting to the user's mouse. Drop it into any React app as an atmospheric background effect.

## Install

```bash
npm install cosmic-dust-canvas
```

> Requires React 17+ (`react` and `react-dom` are the only peer dependencies).

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

| Prop                   | Type                                           | Default                             | Description                                                                                                                                                                             |
| ---------------------- | ---------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                | `number`                                       | `200`                               | Number of particles                                                                                                                                                                     |
| `colors`               | `string[]`                                     | `['#ffffff', '#a78bfa', '#60a5fa']` | Hex color strings; particles cycle through these                                                                                                                                        |
| `minSize`              | `number`                                       | `1`                                 | Minimum particle radius in px                                                                                                                                                           |
| `maxSize`              | `number`                                       | `3`                                 | Maximum particle radius in px                                                                                                                                                           |
| `speed`                | `number`                                       | `0.4`                               | Drift speed multiplier                                                                                                                                                                  |
| `glowIntensity`        | `number`                                       | `15`                                | Glow halo spread in px beyond the particle (radial-gradient ring); `0` = no glow                                                                                                        |
| `mouseInfluenceRadius` | `number`                                       | `120`                               | Radius in px around the cursor that influences particles                                                                                                                                |
| `mouseEffect`          | `'repel' \| 'attract' \| 'none'`               | `'repel'`                           | How particles react to the cursor                                                                                                                                                       |
| `touch`                | `boolean`                                      | `true`                              | Touch drag drives the same repel/attract influence as the mouse; touchmove suppresses page scroll only while `mouseEffect` is not `'none'`. Toggling at runtime takes effect on remount |
| `shape`                | `'circle' \| 'star' \| 'square' \| 'triangle'` | `'circle'`                          | Built-in particle shape; non-circle shapes share the circular bounding-radius glow halo                                                                                                 |
| `twinkle`              | `number`                                       | `0`                                 | Opacity-pulse strength (useful range `[0,1]`); particles shimmer out of sync. `0` = off                                                                                                 |
| `colorCycle`           | `number`                                       | `0`                                 | Palette-cycling speed; particles step through `colors` over time (needs 2+ colors). `0` = off                                                                                           |
| `renderParticle`       | `(ctx, p) => void`                             | —                                   | Escape hatch for fully custom per-particle drawing; overrides `shape` and bypasses the sprite cache                                                                                     |
| `className`            | `string`                                       | —                                   | Applied to the `<canvas>` element                                                                                                                                                       |
| `style`                | `React.CSSProperties`                          | —                                   | Applied to the `<canvas>` element                                                                                                                                                       |

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

| Package     | Version |
| ----------- | ------- |
| `react`     | `≥ 17`  |
| `react-dom` | `≥ 17`  |

## License

MIT
