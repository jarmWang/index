/**
 * 全局组件自动注册
 *
 * 全局组件各个组件按文件夹区分，文件夹名称与组件名关联，务必与组件名保持一致
 * 文件夹内至少保留一个文件名为 index 的组件入口，例如 index.vue
 * 自动注册会将文件夹的名称设为组件名
 * 如果组件是通过 js 进行调用，则确保组件入口文件为 index.js
 */

import { defineAsyncComponent } from 'vue'

const requireComponents = import.meta.glob(['./*/*.vue', './*/*.js'])
export default {
    install(app) {
        for (const [key, value] of Object.entries(requireComponents)) {
            const name = key.split('/')
            if (/.vue$/.test(name[2])) {
                app.component(name[1], defineAsyncComponent(value))
            } else {
                app.use(value)
            }
        }
    }
}
