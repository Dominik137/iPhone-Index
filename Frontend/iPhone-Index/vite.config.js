import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Include tailwindcss as part of postcss configuration
    tailwindcss,
  ],
  server: {
    // changes our vite to launch out of port 3000
    port: 3000,
    // this allows the app to be accessed from outside the localhost 
    cors:true,
    // we write our fetches to /api/route and it will go through this proxy
    proxy: {
      "/api":{
        // we can adjust the target based on our backend port
        target: "http://127.0.0.1:5000",
        changeOrigin:true,
        secure: false,
        rewrite: (path)=>path.replace(/^\/api/,"")
      }
    }
  }
})
