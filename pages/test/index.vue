<template>
  <div class="news-container">
    <!-- 页面标题 -->
    <div class="news-header">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">最新资讯</h1>
      <p class="text-gray-600">获取行业最新动态与趋势</p>
    </div>
    
    <!-- 筛选选项卡 -->
    <div class="flex justify-center mb-8">
      <div class="flex space-x-2">
        <UButton
          v-for="category in categories" 
          :key="category.id"
          @click="activeCategory = category.id"
          :variant="activeCategory === category.id ? 'solid' : 'outline'"
          :color="activeCategory === category.id ? 'primary' : 'gray'"
          size="md"
          class="rounded-full"
        >
          {{ category.name }}
        </UButton>
      </div>
    </div>
    
    <!-- 搜索框 -->
    <div class="mb-8 max-w-md mx-auto">
      <UInput 
        v-model="searchQuery"
        placeholder="搜索新闻..."
        icon="i-heroicons-magnifying-glass"
        size="lg"
      />
    </div>
    
    <!-- 新闻卡片网格 -->
    <div class="news-grid">
      <UCard
        v-for="news in paginatedNews" 
        :key="news.id"
        class="news-card hover:shadow-xl transition-all duration-300 relative"
      >
        <!-- 分类标签 -->
        <UBadge 
          class="news-category"
          :color="{
            '科技': 'blue',
            '健康': 'green',
            '娱乐': 'purple',
            '体育': 'red'
          }[news.category]"
          variant="solid"
        >
          {{ news.category }}
        </UBadge>
        
        <!-- 新闻图片 -->
        <img 
          :src="news.image" 
          :alt="news.title"
          class="news-image w-full rounded-t-lg"
        >
        
        <!-- 新闻内容 -->
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ news.title }}</h3>
          <p class="text-gray-600 mb-4">{{ news.summary }}</p>
          
          <!-- 底部信息 -->
          <div class="news-footer">
            <span>{{ formatDate(news.date) }}</span>
            <div class="flex items-center">
              <UIcon name="i-heroicons-eye" class="mr-1 text-gray-400" />
              <span class="mr-3">{{ news.views }}</span>
              <UIcon name="i-heroicons-chat-bubble-left" class="mr-1 text-gray-400" />
              <span>{{ news.comments }}</span>
            </div>
          </div>
        </div>
      </UCard>
    </div>
    
    <!-- 分页 -->
    <div class="mt-8 flex justify-center">
      <UPagination 
        v-model="currentPage"
        :page-count="totalPages"
        :total="filteredNews.length"
        :ui="{
          wrapper: 'flex items-center gap-1',
          rounded: 'rounded-full min-w-[32px] justify-center'
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 当前活动分类
const activeCategory = ref('all')

// 搜索查询
const searchQuery = ref('')

// 当前页码
const currentPage = ref(1)

// 每页显示数量
const itemsPerPage = 6

// 分类列表
const categories = [
  { id: 'all', name: '全部' },
  { id: 'tech', name: '科技' },
  { id: 'health', name: '健康' },
  { id: 'entertainment', name: '娱乐' },
  { id: 'sports', name: '体育' }
]

// 新闻数据
const newsList = [
  {
    id: 1,
    title: '人工智能在医疗领域的应用取得突破',
    summary: '最新研究表明，AI算法在早期癌症筛查中的准确率已达到95%，远超传统方法。',
    category: '科技',
    date: '2023-06-15',
    views: 1245,
    comments: 42,
    image: 'https://source.unsplash.com/random/600x400/?technology'
  },
  {
    id: 2,
    title: '研究发现：每天步行30分钟可显著降低心脏病风险',
    summary: '国际医学期刊发表最新研究，证实适度运动对心血管健康的积极影响。',
    category: '健康',
    date: '2023-06-14',
    views: 987,
    comments: 23,
    image: 'https://source.unsplash.com/random/600x400/?health'
  },
  {
    id: 3,
    title: '夏季音乐节阵容公布，多位国际巨星加盟',
    summary: '今年夏季音乐节将邀请超过50组艺人，涵盖流行、摇滚、电子等多种音乐风格。',
    category: '娱乐',
    date: '2023-06-13',
    views: 1567,
    comments: 78,
    image: 'https://source.unsplash.com/random/600x400/?music'
  },
  {
    id: 4,
    title: '世界杯预选赛：国家队大胜对手晋级在望',
    summary: '在昨晚的比赛中，国家队以3-0完胜对手，距离世界杯正赛仅一步之遥。',
    category: '体育',
    date: '2023-06-12',
    views: 2345,
    comments: 156,
    image: 'https://source.unsplash.com/random/600x400/?sports'
  },
  {
    id: 5,
    title: '新一代智能手机发布，搭载革命性摄像头技术',
    summary: '最新旗舰手机采用突破性的影像系统，夜间拍摄效果提升300%。',
    category: '科技',
    date: '2023-06-11',
    views: 1890,
    comments: 87,
    image: 'https://source.unsplash.com/random/600x400/?smartphone'
  },
  {
    id: 6,
    title: '专家建议：均衡饮食比单一营养素补充更重要',
    summary: '营养学家指出，多样化饮食结构对长期健康的影响远超单一营养素的补充。',
    category: '健康',
    date: '2023-06-10',
    views: 765,
    comments: 19,
    image: 'https://source.unsplash.com/random/600x400/?nutrition'
  },
  {
    id: 7,
    title: '年度电影颁奖典礼落幕，多部作品获殊荣',
    summary: '本届电影节共颁发24个奖项，反映了过去一年电影艺术的多元发展。',
    category: '娱乐',
    date: '2023-06-09',
    views: 1123,
    comments: 45,
    image: 'https://source.unsplash.com/random/600x400/?movie'
  },
  {
    id: 8,
    title: '奥运会倒计时一周年，筹备工作进入冲刺阶段',
    summary: '主办城市各项设施建设已完成85%，志愿者招募工作即将启动。',
    category: '体育',
    date: '2023-06-08',
    views: 1789,
    comments: 92,
    image: 'https://source.unsplash.com/random/600x400/?olympics'
  }
]

// 格式化日期
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('zh-CN', options)
}

// 过滤新闻
const filteredNews = computed(() => {
  let filtered = newsList
  
  // 按分类过滤
  if (activeCategory.value !== 'all') {
    const categoryMap = {
      'tech': '科技',
      'health': '健康',
      'entertainment': '娱乐',
      'sports': '体育'
    }
    filtered = filtered.filter(news => news.category === categoryMap[activeCategory.value])
  }
  
  // 按搜索词过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(news => 
      news.title.toLowerCase().includes(query) || 
      news.summary.toLowerCase().includes(query)
    )
  }
  
  return filtered
})

// 分页后的新闻
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredNews.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredNews.value.length / itemsPerPage)
})
</script>

<style scoped>
.news-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.news-header {
  text-align: center;
  margin-bottom: 30px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.news-card {
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-category {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

.news-image {
  height: 200px;
  object-fit: cover;
}

.news-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  font-size: 0.875rem;
  color: #64748b;
}
</style>