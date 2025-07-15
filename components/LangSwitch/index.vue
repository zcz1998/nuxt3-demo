<template>
  <UDropdownMenu
    :items="languageItems"
    :popper="{ placement: 'bottom-start',trigger:'mouseenter focus' }"
    v-model="isOpen"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
    mode="hover"
  >
    <UIcon name="material-symbols-light:language" class="size-7 text-gray-200 opacity-50 cursor-pointer" />

    <template #item="{ item }">
      <div class="flex items-center justify-start gap-2 px-5">
        <span>{{ item.label }}</span>
      </div>
    </template>
  </UDropdownMenu>
</template>

<script setup>
const { locale, setLocale } = useI18n()
import  { useLanguageStore } from '@/stores/lang'
const languageStore = useLanguageStore()

const isOpen = ref(false)
// 支持的语言列表
const languages = languageStore.languageOption

// 当前语言
// const currentLanguage = computed(() => {
//   return languages.find(l => l.code === locale.value) || languages[0]
// })

// 下拉菜单项
const languageItems = computed(() => {
  return languages
    .map(language => ({
      label: language.label,
      onSelect: () => {
        setLocale(language.code)
        languageStore.setLocale(language.code)
      }
    }))
})

// const { locales, setLocale } = useI18n()
// const changeLang = (lang)=>{
//     setLocale(lang)
//     languageStore.setLocale(lang)
// }
</script>