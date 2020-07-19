export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  publicRuntimeConfig: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337',
    apiToken: process.env.API_TOKEN,
  },
  // privateRuntimeConfig: {
  //   apiToken: process.env.API_TOKEN
  // },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.author || 'Romeo Nutifafa Folie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.description || 'Portfolio website',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/paytone-one-v12-latin-regular.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/cutive-mono-v8-latin-regular.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/poppins-v11-latin-800.woff2',
        crossorigin: true,
      },
    ],
    script: [{ src: '/js/app.js', body: true }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/app.css', 'aos/dist/aos.css', '@/assets/css/animate.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '@/plugins/aos.js', ssr: false }, { src: '@/plugins/vuex-cache.js', ssr: false}],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/apollo'],

  apollo: {
    clientConfigs: {
      default: '@/plugins/github-apollo-config.js',
      otherClient: '@/plugins/strapi-apollo-config.js',
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['@/plugins/vuex-cache']
  },
}
