<script setup lang="ts">
useSeoMeta({
  description: 'An opinionated starter template for Nuxt 3.',
  ogDescription: 'An opinionated starter template for Nuxt 3.',
  ogImage: '/android-chrome-512x512.png',
  ogTitle: 'Vitreous',
  twitterCard: 'summary',
  twitterDescription: 'An opinionated starter template for Nuxt 3.',
  twitterImage: '/android-chrome-512x512.png',
  twitterTitle: 'Vitreous',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
    { href: '/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
    { href: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
    { href: '/site.webmanifest', rel: 'manifest' },
    { color: '#5bbad5', href: '/safari-pinned-tab.svg', rel: 'mask-icon' },
  ],
  meta: [
    { content: 'Vitreous', name: 'apple-mobile-web-app-title' },
    { content: 'Vitreous', name: 'application-name' },
    { content: '#2d89ef', name: 'msapplication-TileColor' },
    { content: '#ffffff', name: 'theme-color' },
  ],
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} - Vitreous` : 'Vitreous'
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
