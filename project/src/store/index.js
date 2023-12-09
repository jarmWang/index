/*
 * @Author: wbq
 * @Date: 2023-08-24 14:15:29
 * @LastEditTime: 2023-09-07 22:23:35
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \vue\demo\vue3\DemoV3\new-vue3\src\store\index.js
 */
import { createStore } from 'vuex'
const files = import.meta.globEager('./modules/*.js')
const modules = {}
for (const key in files) {
    const file = files[key].default;
    if (file != undefined) {
        // 截取文件名
        modules[key.replace(/(\.\/modules\/)|(\.js)/g, '')] = file
    }
}

const store = createStore({
    modules: modules,
    strict: process.env.NODE_ENV !== 'production'
})

export default store