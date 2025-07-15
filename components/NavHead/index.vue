<template>
  <header class="bg-[#18181C] shadow-sm sticky w-full top-0 z-50">
    <UContainer class="flex items-center justify-between h-18 gap-12">
      <!-- 左侧 Logo -->
      <div class="flex-shrink-0">
        <NuxtLink :to="localePath('/')">
          <img src="@/assets/image/navhead/logo.svg" alt="UgPhone">
        </NuxtLink>
      </div>

      <!-- 中间菜单 - 大屏幕显示 -->
      <nav class="hidden md:flex flex-1 space-x-8">
        <NuxtLink v-for="item in navItems" :key="item.name" :to="localePath(item.path)"
          class="text-gray-200  opacity-50 hover:text-primary-600 hover:opacity-100 px-3 py-2 text-base font-medium"
          active-class="text-primary-600 opacity-100">
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- 右侧按钮 - 大屏幕显示 -->
      <div class="hidden md:flex items-center space-x-4">
        <lang-switch class="mr-10"></lang-switch>
        <UDropdownMenu
    :items="items"
    :ui="{
      content: 'w-48'
    }"
  >
  <UButton color="primary" variant="outline" class="px-8 py-2">下载客户端</UButton>
  </UDropdownMenu>
        
        <UButton class="px-8 py-2" to="https://github.com/nuxt/ui" target="_blank">免费试用</UButton>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="flex md:hidden lg:hidden items-center space-x-2 gap-5">
        <lang-switch></lang-switch>
        <UIcon name="i-heroicons-bars-3" class="size-6 text-gray-200 opacity-50 cursor-pointer"
          @click="isMobileMenuOpen = true" />
      </div>
    </UContainer>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const { t } = useI18n()
// 导航菜单项
const navItems = [
  { name: t('home'), path: '/' },
  { name: t('news'), path: '/news' },
  { name: t('plan'), path: '/plan' },
  { name: t('support'), path: '/FAQ' },
]




const items = ref([
  [
    {
      label: '安卓',
      icon: 'i-lucide-users'
    },
    {
      label: 'Window',
      icon: 'i-lucide-user-plus',
      children: [
        [
          {
            label: 'Email',
            icon: 'i-lucide-mail'
          },
          {
            label: 'Message',
            icon: 'i-lucide-message-square'
          }
        ],
        [
          {
            label: 'More',
            icon: 'i-lucide-circle-plus'
          }
        ]
      ]
    },
  ],
])
</script>
