import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admissions: resolve(__dirname, 'public/admissions.html'),
        academics: resolve(__dirname, 'public/academics.html'),
        'campus-life': resolve(__dirname, 'public/campus-life.html'),
        'student-center': resolve(__dirname, 'public/student-center.html'),
        hostel: resolve(__dirname, 'public/hostel.html'),
        sports: resolve(__dirname, 'public/sports.html'),
        'application-form': resolve(__dirname, 'public/application-form.html'),
        events: resolve(__dirname, 'public/events.html')
      }
    }
  },
  server: {
    port: 5175,
    open: true
  },
  // Netlify specific configurations
  plugins: [],
  optimizeDeps: {
    include: []
  }
}) 