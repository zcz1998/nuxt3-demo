<template>
  <UDropdownMenu
    :items="languageItems"
    :popper="{ placement: 'bottom-start' }"
    :ui="{ width: 'w-32' }"
  >
    <UButton
      color="gray"
      variant="ghost"
      :label="currentLanguage.label"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />

    <template #item="{ item }">
      <div class="flex items-center gap-2">
        <UIcon :name="item.icon" class="w-5 h-5" />
        <span>{{ item.label }}</span>
      </div>
    </template>
  </UDropdownMenu>
</template>

<script setup>
const { locale, setLocale } = useI18n()

// 支持的语言列表
const languages = [
  { code: 'en', label: 'English', icon: 'i-twemoji-flag-united-states' },
  { code: 'zh', label: '中文', icon: 'i-twemoji-flag-china' },
  { code: 'ja', label: '日本語', icon: 'i-twemoji-flag-japan' },
  // 添加更多语言...
]

// 当前语言
const currentLanguage = computed(() => {
  return languages.find(l => l.code === locale.value) || languages[0]
})

// 下拉菜单项
const languageItems = computed(() => {
  return languages
    .filter(l => l.code !== locale.value)
    .map(language => ({
      label: language.label,
      icon: language.icon,
      click: () => setLocale(language.code)
    }))
})
</script>