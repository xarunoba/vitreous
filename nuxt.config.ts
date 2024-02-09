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
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    preload: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: [
              '"Inter"',
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
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
  },
})
