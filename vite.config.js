import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: './',
  server: {
    proxy: {
      '/api/ifpa': {
        target: 'https://api.ifpapinball.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ifpa/, ''),
      },
    },
  },
})
