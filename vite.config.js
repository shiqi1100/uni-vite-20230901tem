import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router', 'uni-app', 'pinia'],
      exclude: ['createApp'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    }),
    WindiCSS({
      scan: {
        dirs: ['.'], // 当前目录下所有文件
        fileExtensions: ['vue', 'js', 'ts'] // 同时启用扫描vue/js/ts
      }
    }),
    uni()
  ],
  server: {
    open: true, // 自动打开
    base: './ ', // 生产环境路径
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: '', // 后端服务实际地址
        changeOrigin: true, // 开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
