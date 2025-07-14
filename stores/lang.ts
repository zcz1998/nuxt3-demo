// stores/language.ts
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLocale: 'en' // 默认语言
  }),
  
  actions: {
    setLocale(locale: string) {
      this.currentLocale = locale
    }
  },
  
  // persist: true // 可选：启用持久化
})