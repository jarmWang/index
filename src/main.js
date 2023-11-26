/*
 * @Author: wbq
 * @Date: 2023-08-10 14:39:58
 * @LastEditTime: 2023-08-15 17:53:55
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \BaiduSyncdisk\vue\demo\vue3\DemoV3\new-vue3\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route'
import '@/permission'
import store from '@/store'

import coms from '@/components/index.js'
import util from '@/utils/index.js'
const app = createApp(App)
// 全局注册组件
app.use(coms)
app.use(util)
app.use(router)
app.use(store)
app.mount('#app')
