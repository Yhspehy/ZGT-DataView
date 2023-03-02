import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import gzipPlugin from 'rollup-plugin-gzip'

// https://vitejs.dev/config/
export default defineConfig({
  // 只在github page上使用
  // base: '/ZGT-DataView/',
  plugins: [vue(), vueJsx(), gzipPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
