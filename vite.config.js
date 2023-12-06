import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//執行改為localhost(原本是127.0.0.1)
import dns from 'dns'
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@pic':fileURLToPath(new URL('./src/assets/resource', import.meta.url)),'@vw':fileURLToPath(new URL('./src/views', import.meta.url)),
      '@st':fileURLToPath(new URL('./src/store', import.meta.url)),
      '@cp':fileURLToPath(new URL('./src/components', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
