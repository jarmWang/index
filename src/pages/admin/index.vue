<!--
 * @Author: wbq
 * @Date: 2023-08-10 17:51:32
 * @LastEditTime: 2023-09-06 11:09:05
 * @LastEditors: wbq
 * @Description: 文件功能描述
 * @FilePath: \vue\demo\vue3\DemoV3\new-vue3\src\pages\admin\index.vue
-->
<template>
    <div>
      <div
        v-draggable="item"
        class="draggable-item"
      >
        <button @click="onclicks">Drag Me</button>
      </div>

      <div
        v-draggable
        class="draggable-item"
      >
        <button @click="onclicks">Drag Me</button>
      </div>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const item = ref('123')
  const item2 = ref('456')
  const draggable = document.getElementsByClassName('draggable-item')

  const onclicks = () => {
    console.log('onclicks', draggable[0].style[0])
  }
  </script>
  
  <style>
  .draggable-item {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #3498db;
    color: #fff;
    text-align: center;
    line-height: 100px;
    cursor: grab;
  }
  </style>
  