<template>
  <UPopover mode="hover">
      <UIcon name="i-material-symbols-light-language" class="size-5 text-gray-500 dark:text-gray-400" />

    <template #content>
      <div class="w-40 p-1">
        <div
          v-for="item in languageItems"
          :key="item.code"
          class="group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="{ 'bg-gray-100 dark:bg-gray-800 font-medium': item.active }"
          @click="item.onSelect()"
        >
          <span>{{ item.label }}</span>
          <UIcon
            v-if="item.active"
            name="i-heroicons-check-20-solid"
            class="ml-auto size-4 text-primary-500 dark:text-primary-400"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup>
const { locale, setLocale } = useI18n()
import { useLanguageStore } from '@/stores/lang'
const languageStore = useLanguageStore()

// 支持的语言列表
const languages = languageStore.languageOption

// 下拉菜单项
const languageItems = computed(() => {
  return languages.map((language) => ({
    label: language.label,
    code: language.code,
    active: language.code === locale.value,
    onSelect: () => {
      setLocale(language.code)
      languageStore.setLocale(language.code)
      isOpen.value = false
    }
  }))
})
</script>