<template>
  <div class="carousel-container">
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{
        item: 'basis-full sm:basis-1/3',
        container: 'rounded-lg',
      }"
      arrows
      :prev-button="{
        color: 'gray',
        variant: 'solid',
        class: 'hidden sm:inline-flex',
      }"
      :next-button="{
        color: 'gray',
        variant: 'solid',
        class: 'hidden sm:inline-flex',
      }"
    >
      <div class="carousel-item">
        <img :src="item.image" :alt="item.title" class="carousel-image" />
        <div class="carousel-content">
          <h3 class="carousel-title">{{ item.title }}</h3>
          <p class="carousel-description">{{ item.description }}</p>
        </div>
      </div>
    </UCarousel>

    <!-- 底部自定义导航按钮 -->
    <div class="custom-navigation">
      <UButton
        color="gray"
        variant="solid"
        icon="i-heroicons-arrow-left-20-solid"
        @click="prev"
        class="nav-button"
      />
      <div class="indicators">
        <span
          v-for="(_, index) in items"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goTo(index)"
        />
      </div>
      <UButton
        color="gray"
        variant="solid"
        icon="i-heroicons-arrow-right-20-solid"
        @click="next"
        class="nav-button"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const items = [
  {
    title: '项目 1',
    description: '这是第一个项目的描述内容',
    image: 'https://via.placeholder.com/400x300?text=Slide+1'
  },
  {
    title: '项目 2',
    description: '这是第二个项目的描述内容',
    image: 'https://via.placeholder.com/400x300?text=Slide+2'
  },
  {
    title: '项目 3',
    description: '这是第三个项目的描述内容',
    image: 'https://via.placeholder.com/400x300?text=Slide+3'
  },
  {
    title: '项目 4',
    description: '这是第四个项目的描述内容',
    image: 'https://via.placeholder.com/400x300?text=Slide+4'
  },
  {
    title: '项目 5',
    description: '这是第五个项目的描述内容',
    image: 'https://via.placeholder.com/400x300?text=Slide+5'
  },
  {
    title: '项目 6',
    description: '这是第六个项目的描述内容',
    image: 'https://via.placeholder.com/400x300?text=Slide+6'
  }
]

const carouselRef = ref(null)

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = items.length - 1
  }
  if (carouselRef.value) {
    carouselRef.value.prev()
  }
}

const next = () => {
  if (currentIndex.value < items.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
  if (carouselRef.value) {
    carouselRef.value.next()
  }
}

const goTo = (index) => {
  currentIndex.value = index
  if (carouselRef.value) {
    carouselRef.value.goTo(index)
  }
}
</script>

<style scoped>
.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.carousel-item {
  padding: 0 10px;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.carousel-content {
  padding: 16px;
  text-align: center;
}

.carousel-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.carousel-description {
  color: #666;
  font-size: 0.9rem;
}

.custom-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.indicators {
  display: flex;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: #888;
}

.nav-button {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>