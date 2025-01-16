// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Pavo',
      link: [
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap',
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        // },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.1/css/all.min.css',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      mode: process.env.MODE,
      apiBaseURL: process.env.API_BASE_URL,
    },
  },
})
