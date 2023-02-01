// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap',
          rel: 'stylesheet',
        },
      ],
      titleTemplate: (title) => {
        return title ? `${title} - Enif` : 'Enif';
      },
    },
  },

  typescript: {
    shim: false,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:3000',
      apiTokenStorageKey: 'enif:token',
    },
  },

  modules: ['@pinia/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
