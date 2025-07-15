<template>
  <div class="min-h-screen flex flex-col">
    <!-- 1. Banner板块（无版心） -->
    <section class="w-full  bg-skyblue">
      <div class="h-96 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">欢迎来到我们的平台</h1>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">这是一个全宽的Banner区域，内容可以延伸到屏幕边缘</p>
          <UButton 
            color="white" 
            variant="solid" 
            class="mt-6"
            label="立即开始"
          />
        </div>
      </div>
    </section>

    <!-- 2. 内容板块1（有版心） -->
    <UContainer class="py-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">我们的特色服务</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
            这个板块使用了UContainer，所以内容宽度受到限制，确保在大型屏幕上不会过度拉伸。
          </p>
          <ul class="space-y-3">
            <li v-for="feature in features" :key="feature" class="flex items-center">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-500 mr-2" />
              <span class="text-gray-700 dark:text-gray-200">{{ feature }}</span>
            </li>
          </ul>
        </div>
        <div class="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
            alt="特色服务" 
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </UContainer>

    <!-- 3. 内容板块2（有版心） -->
    <UContainer class="pb-16">
      <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">为什么选择我们</h2>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="item in reasons" 
            :key="item.title"
            class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
              <UIcon :name="item.icon" class="w-6 h-6 text-primary-500" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const features = [
  "专业的技术团队支持",
  "24/7全天候客户服务",
  "安全可靠的数据保护",
  "灵活的定制化方案"
]

const reasons = [
  {
    icon: 'i-heroicons-shield-check',
    title: '安全保障',
    description: '采用最先进的安全技术保护您的数据和隐私'
  },
  {
    icon: 'i-heroicons-rocket-launch',
    title: '高性能',
    description: '优化的系统架构确保快速响应和流畅体验'
  },
  {
    icon: 'i-heroicons-cog',
    title: '易于使用',
    description: '直观的界面设计，无需复杂培训即可上手'
  },
  {
    icon: 'i-heroicons-chart-bar',
    title: '数据分析',
    description: '提供详细的数据分析和可视化报告'
  },
  {
    icon: 'i-heroicons-device-phone-mobile',
    title: '多端支持',
    description: '完美适配各种设备，随时随地访问'
  },
  {
    icon: 'i-heroicons-heart',
    title: '客户至上',
    description: '以客户需求为中心的服务理念'
  }
]
</script>

