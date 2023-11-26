<!--
 * @Author: wbq
 * @Date: 2023-08-09 16:37:51
 * @LastEditTime: 2023-08-11 14:11:14
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \BaiduSyncdisk\vue\demo\vue3\DemoV3\new-vue3\src\components\hello\index.vue
-->
<template>
    <div>
        <ul v-if="show">
            <li v-for="(item, index) in msg" :key="index">{{ item.val }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const msg = ref([{ val: '111' }, { val: '222' }, { val: '333' },])
const timer = setInterval(() => {
    show.value = !show.value
}, 1000)
setTimeout(() => {
    clearInterval(timer)
}, 5000)
</script>