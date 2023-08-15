import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "static/assets/",
    emptyOutDir: false,
  },
  plugins: [react()],
})
