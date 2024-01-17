import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      Vue(),
      Components(),
      AutoImport({
        imports: ['vue'],
        dts: './auto-import.d.ts',
        eslintrc: {
          enabled: false
        }
      })
    ],
    server: {
      open: true
    }
  }
})
