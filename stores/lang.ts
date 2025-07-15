// stores/language.ts
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLocale: 'en', // 默认语言
    languageOption:[
      {
      label: 'English',
      code: 'en',
    },
    {
      label:'简体中文',
      code:'zh'
    },
    {
      label: '繁体中文',
      code: 'tc',
    },
    {
      label: '日本語',
      code: 'jp',
    },
    {
      label: 'ภาษาไทย',
      code: 'th',
    },
    {
      label: '한국어',
      code: 'ko',
    },
    {
      label: 'Việt nam',
      code: 'vi',
    },
    {
      label: 'português',
      code: 'pt',
    },
    {
      label: 'Spanish',
      code: 'es',
    },
    {
      label: 'Indonesia',
      code: 'id',
    },
    ]
  }),
  
  actions: {
    setLocale(locale: string) {
      this.currentLocale = locale
    }
  },
})