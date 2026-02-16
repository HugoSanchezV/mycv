// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        class: 'scroll-smooth scroll-pt-24 md:scroll-pt-28'
      }
    }
  },
  features: {
    inlineStyles: true
  }
})
