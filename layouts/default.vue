<template>
  <UApp>
<div class="flex flex-col w-screen h-screen">
    <nav-head :key="locale"></nav-head>
    <!-- 页面内容将在这里渲染 -->
    <div class="flex-1">
      <slot />
    </div>
    <nav-footer></nav-footer>
  </div>
  </UApp>
  
</template>

<script setup>
const { locale } = useI18n()
</script>