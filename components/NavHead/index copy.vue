<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 py-12">
      <!-- 顶部内容 -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Logo 和公司信息 -->
        <div class="space-y-4">
          <NuxtLink to="/" class="flex items-center gap-2">
            <!-- <img 
              src="/logo.png" 
              alt="Company Logo" 
              class="w-12 h-12 rounded-lg object-cover"
            > -->
            <span class="text-xl font-bold">Company Name</span>
          </NuxtLink>
          <p class="text-gray-500 dark:text-gray-400">
            我们致力于提供优质的产品和服务
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              :aria-label="social.name"
            >
              <UIcon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- 菜单部分 -->
        <div v-for="section in menuSections" :key="section.title">
          <h3 class="text-lg font-semibold mb-4">{{ section.title }}</h3>
          <ul class="space-y-2">
            <li v-for="item in section.items" :key="item.name">
              <NuxtLink
                :to="item.url"
                class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">联系我们</h3>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-phone" class="text-primary w-5 h-5" />
              <span class="text-gray-500 dark:text-gray-400">123-456-7890</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-envelope" class="text-primary w-5 h-5" />
              <span class="text-gray-500 dark:text-gray-400">info@example.com</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-map-pin" class="text-primary w-5 h-5" />
              <span class="text-gray-500 dark:text-gray-400">123 Main St, City</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div class="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} Company Name. 保留所有权利.
        </p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <NuxtLink
            v-for="link in bottomLinks"
            :key="link.name"
            :to="link.url"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: 'Facebook',
    icon: 'i-heroicons-facebook',
    url: 'https://facebook.com'
  },
  {
    name: 'Twitter',
    icon: 'i-heroicons-twitter',
    url: 'https://twitter.com'
  },
  {
    name: 'Instagram',
    icon: 'i-heroicons-instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'LinkedIn',
    icon: 'i-heroicons-linkedin',
    url: 'https://linkedin.com'
  }
]

const menuSections = [
  {
    title: '产品',
    items: [
      { name: '产品1', url: '/' },
      { name: '产品2', url: '/' },
      { name: '产品3', url: '/' },
      { name: '所有产品', url: '/' }
    ]
  },
  {
    title: '资源',
    items: [
      { name: '博客', url: '/' },
      { name: '文档', url: '/' },
      { name: '常见问题', url: '/' },
      { name: '支持', url: '/' }
    ]
  },
  {
    title: '公司',
    items: [
      { name: '关于我们', url: '/' },
      { name: '团队', url: '/' },
      { name: '职业', url: '/' },
      { name: '联系我们', url: '/' }
    ]
  }
]

const bottomLinks = [
  { name: '隐私政策', url: '/' },
  { name: '服务条款', url: '/' },
  { name: 'Cookie 政策', url: '/' }
]
</script>

<style scoped>
/* 自定义样式可以放在这里 */
footer {
  transition: background-color 0.3s ease;
}

.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
</style>