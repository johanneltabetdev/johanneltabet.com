export default {
  target: 'static',

  srcDir: 'src/',

  head: {
    title: 'Johann Eltabet | Freelance Front-End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/styles/main.css'],

  plugins: ['~/plugins/axios', '~/plugins/observe-visibility.client.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/composition-api', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', 'nuxt-svg-loader'],

  axios: { baseURL: process.env.BASE_URL },

  pageTransition: { name: 'page', mode: 'out-in' },

  googleAnalytics: { id: 'UA-35729077-1' },
}
