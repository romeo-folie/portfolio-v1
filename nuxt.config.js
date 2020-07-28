export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  publicRuntimeConfig: {
    strapiBaseUri: process.env.STRAPI_BASE,
    githubApiToken: process.env.GITHUB_API_TOKEN,
    strapiLiveUri: process.env.STRAPI_URL,
  },
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
        content: process.env.description || 'Developer Portfolio website',
      },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#041721' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
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
      {
        rel: 'preconnect',
        href: 'https://api.github.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: true,
      }
    ],
    script: [{ src: '/js/app.js', body: true }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/app.css', 'aos/dist/aos.css', '@/assets/css/animate.css', '@/assets/css/spinkit.min.css'],
  loading: '@/components/Loading.vue',
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/aos.js', ssr: false },
    { src: '@/plugins/localStorage.js', ssr: false },
  ],
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
    '@nuxtjs/moment',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/apollo', '@nuxtjs/markdownit'],
  markdownit: {
    injected: true,
    html: false,
  },
  apollo: {
    clientConfigs: {
      default: '@/plugins/github-apollo-config.js',
      otherClient: '@/plugins/strapi-apollo-config.js',
    },
  },
  pwa: {
    manifest: {
      name: 'folie_dev',
      lang: 'en'
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
