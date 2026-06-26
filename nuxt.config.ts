// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'

// Resolve paths relative to THIS layer. A bare '~' alias would resolve from the
// consuming site's srcDir, not the layer, so the CSS wouldn't be found.
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Always loaded by the layer. Sites can add their own (e.g. main.css)
  css: [resolve('./app/assets/css/layer.css')],

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
