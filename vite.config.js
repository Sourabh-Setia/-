import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/", // Change this to your GitHub repo name if deploying to GitHub Pages
  plugins: [react()],
});
