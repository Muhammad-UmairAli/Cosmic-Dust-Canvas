import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.test.*', 'src/test-setup.ts'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) =>
        `cosmic-dust-canvas.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@react-spring/web'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@react-spring/web': 'ReactSpringWeb',
        },
      },
    },
    sourcemap: true,
  },
})
