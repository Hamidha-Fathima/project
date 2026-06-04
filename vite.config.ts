import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: typeof process !== 'undefined' && process.env.VERCEL ? '/' : '/project/',
  plugins: [react()],
})
