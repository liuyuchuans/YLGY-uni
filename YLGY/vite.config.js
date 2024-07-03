import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni' // 一定要用这个，不然运行会报错
import { resolve } from 'path'

function _resolve(path) {
  return resolve(__dirname, path)
}

export default defineConfig({
  plugins: [uni()],
  base: './', // 这里更改打包相对绝对路径
  // 设置代理服务器
  server: {
    host: '0.0.0.0',
    port: 8888
  },
})


