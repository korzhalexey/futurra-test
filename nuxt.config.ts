export default defineNuxtConfig({
  app: {
    head: {
      title: 'PlanetLearn',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg'
        }
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/variables.scss',
    '~/assets/scss/buttons.scss',
    '~/assets/scss/main.scss',
  ],
  plugins: [
    {
      src: '~/plugins/clickOutside.ts',
      mode: 'client'
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "/assets/scss/mixins.scss";'
        }
      }
    }
  }
})
