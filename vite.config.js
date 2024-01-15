import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    // base: '/side_project_Mall_new/',
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      Vue(),
      Components(),
      AutoImport()
    ],
  }
})
