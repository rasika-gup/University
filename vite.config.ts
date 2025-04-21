import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admissions: resolve(__dirname, 'public/admissions.html'),
        about: resolve(__dirname, 'public/about.html'),
        contact: resolve(__dirname, 'public/contact.html'),
        programs: resolve(__dirname, 'public/programs.html'),
        research: resolve(__dirname, 'public/research.html'),
        studentlife: resolve(__dirname, 'public/studentlife.html')
      }
    }
  },
  server: {
    port: 5175,
    open: true
  }
}) 