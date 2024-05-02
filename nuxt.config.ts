// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 11226,
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/fonts'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: [
              '"Inter"', // Replace with your font name
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ],
          },
        },
      },
    },
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
  },
})
