// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Universal head defaults shared by every site. Per-site brand (theme-color,
  // app title, icons, description) is set in the site, not here.
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      ],
    },
  },

  // `/placeholder/400x400` → placehold.co, for prototyping with <NuxtImg>.
  image: {
    domains: ['placehold.co'],
    alias: { placeholder: 'https://placehold.co' },
  },

  // Registers the Tailwind v4 engine for every site. The site owns its own
  // `@import "tailwindcss"` entry (with @theme/@utility) — see Layer Dev & Deploy.
  vite: {
    plugins: [tailwindcss()],
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
