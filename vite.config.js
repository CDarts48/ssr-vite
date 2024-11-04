import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSSRPlugin from 'vite-plugin-ssr/plugin'

export default defineConfig({
    plugins: [react(), viteSSRPlugin()],
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
        exclude: ['vite-plugin-ssr']
    },
    ssr: {
        noExternal: ['vite-plugin-ssr']
    }
})