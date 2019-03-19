const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'inside-the-scream-website-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'scream website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,400i,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Righteous' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  mode: 'spa',
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    path: 'static/sitemap.xml',
    generate: false,
    hostname: 'https://insidethescream.com',
    routes: [
      '/cours',
      '/stages-masterclasses',
      '/coatching-scenique',
      '/a-propos',
      '/videos',
      '/presse'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    styleResources: {
      scss: './assets/scss/main.scss'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        '_': 'lodash'
      })
    ],
    postcss: {
      preset: {
        autoprefixer: {
          browsers: [
            '> 5%'
          ,
            'ie > 10'
          ]
        }
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

