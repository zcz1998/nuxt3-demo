// https://nuxt.com/docs/api/configuration/nuxt-config
import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'
// 读取 YAML 文件并转换为 JSON
const loadYaml = (filePath: string) => {
  const file = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8')
  return yaml.load(file)
}

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.yaml'
      },
      {
        code: 'zh',
        name: '中文',
        file: 'zh.yaml'
      },
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default', // 路由策略
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // 推荐
    },
    
    // 自定义 YAML 加载器
    // loadYamlMessages: async (locale: string) => {
    //   const filePath = `./locales/${locale}.yml`
    //   return loadYaml(filePath)
    // },
  },
})