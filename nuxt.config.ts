// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  ui:{
    colorMode:false
  },
  css: ['@/assets/css/main.css'],
  i18n: {
    locales: [
      {
      name: 'English',
      code: 'en',
      file:'en.yaml'
    },
    {
      name:'简体中文',
      code:'zh',
      file:'zh.yaml'
    },
    {
      name: '繁体中文',
      code: 'tc',
      file:'tc.yaml'
    },
    {
      name: '日本語',
      code: 'jp',
      file:'jp.yaml'
    },
    {
      name: 'ภาษาไทย',
      code: 'th',
      file:'th.yaml'
    },
    {
      name: '한국어',
      code: 'ko',
      file:'ko.yaml'
    },
    {
      name: 'Việt nam',
      code: 'vi',
      file:'vi.yaml'
    },
    {
      name: 'português',
      code: 'pt',
      file:'pt.yaml'
    },
    {
      name: 'Spanish',
      code: 'es',
      file:'es.yaml'
    },
    {
      name: 'Indonesia',
      code: 'id',
      file:'id.yaml'
    },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default', // 路由策略
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // 推荐
    },
  },
})