<template>
    尾部
    {{ languageStore.currentLocale }}
    {{ $t('cola') }}
    <UButton @click="changeLang('zh')">中文</UButton>
    <UButton @click="changeLang('en')">Eng</UButton>
    
</template>

<script setup>
import { useLanguageStore } from '../../stores/lang'
const languageStore = useLanguageStore()

const { locales, setLocale } = useI18n()
const changeLang = (lang)=>{
    setLocale(lang)
    languageStore.setLocale(lang)
}
</script>