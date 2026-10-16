import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, the base path should match the repo name.
  // If deploying to https://<username>.github.io/<repo>/, set base to '/<repo>/'.
  // If deploying to https://<username>.github.io/ (user/org site), set base to '/'.
  base: '/githubpages/',
})
