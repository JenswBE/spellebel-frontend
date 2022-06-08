import colors from 'vuetify/es5/util/colors'
import fs from 'fs'
import path from 'path'

export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
    timing: false,
  },

  // Rendering mode: https://nuxtjs.org/docs/features/rendering-modes/
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Spellebel',
    title: 'Spellebel',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicon/ms-icon-144x144.png',
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'manifest', href: '/favicon/manifest.json' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cantata+One|Spartan:300,400,500,600,700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/schlunsen/nuxt-leaflet
    'nuxt-leaflet',
    // https://image.nuxtjs.org
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    icons: {
      iconfont: 'mdiSvg',
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  image: {
    presets: {
      aanbodThumbnail: {
        modifiers: {
          format: 'jpg',
          width: 300,
          height: 250,
        },
      },
      aanbodLightbox: {
        modifiers: {
          format: 'jpg',
          width: 1920,
          height: 1080,
        },
      },
    },
  },

  hooks: {
    build: {
      before(nuxt, buildOptions) {
        walkDir(getImgPath(), rotateImageEXIF)
      },
    },
    generator: {
      before(generator, generateOptions) {
        walkDir(getImgPath(), rotateImageEXIF)
      },
    },
  },
}

// Based on https://allenhwkim.medium.com/nodejs-walk-directory-f30a2d8f038f
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const absPath = path.join(dir, f)
    if (fs.statSync(absPath).isDirectory()) {
      walkDir(absPath, callback)
    } else {
      callback(absPath)
    }
  })
}

function getImgPath() {
  return path.join(process.cwd(), 'static', 'img')
}

function rotateImageEXIF(imgPath) {
  let jpegAutoRotate = require('jpeg-autorotate')

  if (!imgPath.endsWith('.jpg') && !imgPath.endsWith('.jpeg')) {
    // This function should only handle JPG images
    return
  }

  jpegAutoRotate
    .rotate(imgPath)
    .then(({ buffer, orientation, dimensions, quality }) => {
      fs.writeFile(imgPath, buffer, (err) => {
        if (err) {
          console.error(`Failed to write rotated image to ${imgPath}`)
        } else {
          console.log(
            `Rotated image ${imgPath} and set Orientation in EXIF to 1.`
          )
        }
      })
    })
    .catch((err) => {
      if (
        err.code !== jpegAutoRotate.errors.no_orientation &&
        err.code !== jpegAutoRotate.errors.correct_orientation
      ) {
        // This error shouldn't have occurred
        console.error(`Failed to rotate image ${imgPath}. Error: `, err)
      }
    })
}
