import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` only matters for the production build (GitHub Pages serves the demo
// under /Cosmic-Dust-Canvas/). The dev server stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Cosmic-Dust-Canvas/' : '/',
  plugins: [react()],
  root: '.',
}))
