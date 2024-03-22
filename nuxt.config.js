import CopyPlugin from 'copy-webpack-plugin'
import path from 'path'

export default {
  target: 'static',
  srcDir: 'src/',
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'Johann Eltabet | Front-End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Johann Eltabet is a front-end developer based in Paris',
      },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'google-site-verification',
        content: 'DMyRVlcU6UNTi_LRV4bo0DNpMlTTU2a3Hd0EjMvM9eg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~assets/styles/main.css'],
  plugins: ['~/plugins/axios', '~/plugins/observe-visibility.client.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
  ],
  modules: ['@nuxtjs/axios', 'nuxt-svg-loader'],
  axios: { baseURL: process.env.BASE_URL },
  pageTransition: { name: 'page' },
  googleAnalytics: { id: 'UA-35729077-1' },
  sitemap: {
    hostname: 'https://johanneltabet.com',
    gzip: true,
  },
  build: {
    plugins: [
      new CopyPlugin({
        patterns: [{ from: process.env.UPLOADS_PATH, to: path.join(__dirname, 'static/') }],
      }),
    ],
  },
}
