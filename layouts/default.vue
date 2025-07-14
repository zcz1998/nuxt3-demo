<template>
  <div class="flex flex-col w-screen h-screen">
    <nav-head></nav-head>
    <!-- 页面内容将在这里渲染 -->
    <div class="flex-1">
      <slot />
    </div>
    <nav-footer></nav-footer>
  </div>
</template>