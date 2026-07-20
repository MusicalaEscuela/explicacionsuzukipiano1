import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // El sitio se publica en https://musicalaescuela.github.io/explicacionsuzukipiano1/
  // por lo que los assets deben resolverse bajo esa subruta, no en la raiz.
  // En desarrollo (npm run dev) se mantiene '/'.
  base: process.env.NODE_ENV === 'production' ? '/explicacionsuzukipiano1/' : '/',
})
