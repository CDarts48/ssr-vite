import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vikePlugin from 'vike/plugin'

export default defineConfig({
  plugins: [react(), vikePlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['vike']
  },
  ssr: {
    noExternal: ['vike']
  }
})