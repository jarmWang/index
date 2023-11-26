/*
 * @Author: wbq
 * @Date: 2023-08-10 14:39:58
 * @LastEditTime: 2023-08-15 14:06:55
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \BaiduSyncdisk\vue\demo\vue3\DemoV3\new-vue3\src\permission.js
 */
import router from '@/route/index';
router.beforeEach((to, from, next) => {
    console.log(to, from);
    next()
})

router.afterEach((to, from) => {
})