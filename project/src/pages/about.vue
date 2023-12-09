<template>
    <div>
      <p>参数值为: {{ $route }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'about',
    mounted() {
      // 当组件被挂载时，可以访问参数
      console.log(this.$route);
    }
  };
  </script>