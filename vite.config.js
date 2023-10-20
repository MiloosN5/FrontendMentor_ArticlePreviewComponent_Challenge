import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FrontendMentor_ArticlePreviewComponent_Challenge",
  plugins: [react()],
})
