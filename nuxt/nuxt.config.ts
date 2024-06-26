// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { isr: true },
    '/blog/**': { isr: true },
  },

  css: [
    '~/assets/styles/global.scss',
    '~/assets/styles/fonts.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_globalIncludes.scss" as *;',
        },
      },
    },
  },

  modules: ['@nuxt/eslint'],
});
