# ANVL Nuxt Base Layer

Shared Nuxt base layer for ANVL agency sites. Extended by every client site to
provide a consistent baseline: SEO, Tailwind 4 engine, shared modules, and
universal head defaults.

## What's included
- SEO: @nuxtjs/seo (sitemap, robots, schema, OG, canonical)
- Styling: Tailwind 4 engine (@tailwindcss/vite). Each site owns its own
  `@import "tailwindcss"` entry with `@theme`/`@utility`
- Modules: @nuxt/image, @nuxt/fonts, @nuxt/icon, @nuxt/scripts, @vueuse/nuxt
- Head defaults: `lang`, viewport and web-app meta
- `<NuxtImg src="/placeholder/400x400">` alias to placehold.co for prototyping

## Consuming this layer
Sites install the layer as a dependency pinned to a tag, so it and all of its
module dependencies are recorded in the site's lockfile:
```jsonc
// package.json
"dependencies": {
  "nuxt-base-layer": "github:anvl-creative/nuxt-base-layer#v1.7.0"
}
```
```ts
// nuxt.config.ts
extends: [process.env.NUXT_BASE_LAYER || 'nuxt-base-layer'],
```
`nuxt` and `vue` are peer dependencies. The site pins the actual versions.

To update, bump the tag in `package.json` and run `pnpm install`.

## Developing
Set `NUXT_BASE_LAYER` in a site's `.env` to the local path of this repo (e.g.
`../base-layer`) for live HMR while editing the layer. Run `pnpm install` here
first so the layer's modules resolve.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt.

## Releasing
Bump `version` in `package.json` → commit → tag with semver → `git push --follow-tags`.
Then bump the `nuxt-base-layer` tag in the starter template's `package.json`.
Full flow + semver rules in the wiki: **Layer Dev & Deploy**.
