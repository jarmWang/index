/*
 * @Author: wbq
 * @Date: 2023-08-15 11:49:30
 * @LastEditTime: 2023-08-15 13:55:49
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \BaiduSyncdisk\vue\demo\vue3\DemoV3\new-vue3\src\route\modules\login.js
 */
const router = [{
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue'),
    meta: { title: '登录', icon: 'login' }
}, {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
    meta: { title: 'about' }
}]

export default router