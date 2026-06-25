# ANVL Nuxt Base Layer

Shared Nuxt base layer for ANVL agency sites. Extended by every client site to
provide a consistent baseline: SEO, Tailwind 4 theme, base components, and config.

## What's included
- SEO: @nuxtjs/seo (sitemap, robots, schema, OG, canonical)
- Styling: Tailwind 4 (@tailwindcss/vite) + @theme tokens in app/assets/css/main.css
- Modules: @nuxt/image, @nuxt/fonts, @nuxt/icon, @nuxt/scripts, @vueuse/nuxt, @nuxtjs/color-mode
- Base app.vue shell + shared components (Anvl* prefix)

## Consuming this layer
Sites extend a pinned tag — they don't clone this repo directly:
\```ts
extends: [['github:anvl-creative/nuxt-base-layer#v1.0.0', { install: true }]]
\```
Auth: set GIGET_AUTH to a read-only PAT scoped to this repo.

## Developing
Inside your current project if making updates to the base layer and testing, set `NUXT_BASE_LAYER` to the local path for live HMR.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt.

## Releasing
Commit → tag with semver → `git push --follow-tags`. Bump the template's default
tag afterward. Full flow + semver rules in the wiki: **Layer Dev & Deploy**.
