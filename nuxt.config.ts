// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Always loaded by the layer. Sites can add their own (e.g. main.css)
  css: ['~/assets/css/layer.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    '@nuxt/scripts',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
  ]
})
