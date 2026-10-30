import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  return {
    plugins: [react()],
    base: './',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      cssCodeSplit: false,
      rollupOptions: {
        input: isBuild
          ? {
              island: path.resolve(__dirname, 'src/island.tsx'),
            }
          : path.resolve(__dirname, 'index.html'),
        output: {
          entryFileNames: 'hero.js',
          chunkFileNames: 'chunks/[name].js',
          assetFileNames: (info) =>
            info.name && String(info.name).endsWith('.css') ? 'hero.css' : 'assets/[name][extname]',
          format: 'es',
        },
      },
    },
    server: {
      host: '127.0.0.1',
      port: 5174,
      strictPort: true,
    },
  }
})
