// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', 'nuxt-calendly'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },
  sanity: {
    name: 'default',
    title: process.env.NUXT_SANITY_TITLE,
    projectId: process.env.NUXT_SANITY_PID,
    dataset: process.env.NUXT_SANITY_DATASET,
  },
});
