/*
 * @Author: wbq
 * @Date: 2023-08-10 14:39:58
 * @LastEditTime: 2023-08-15 10:17:28
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \BaiduSyncdisk\vue\demo\vue3\DemoV3\new-vue3\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
            // '@': path.resolve(__dirname, 'src'),
        }
    },
    server: {
        host: '0.0.0.0',
        // 端口号
        port: 8888,
        // 自动打开浏览器
        open: false,
        // 是否开启https
        https: false
    },
    // 设置反向代理（搁置）
    proxy: {}
})
