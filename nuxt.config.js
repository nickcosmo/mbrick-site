import colors from "vuetify/es5/util/colors";

export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - MBRICK",
    title: "Innovative Brick Systems LLC",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Innovate Brick Systems LLC - expert manufacturer of embedded thin brick systems for the precast concrete and tilt-wall industry"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/mbrick-favi.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/dotenv"],
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV === "production"
            ? process.env.STORYBLOCK_ACCESS_PUBLIC_TOKEN
            : process.env.STORYBLOCK_ACCESS_PREVIEW_TOKEN,
        cacheProvider: "memory"
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.grey.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }]
      ]
    },
    loaders: {
      vue: {
        transformAssetUrls: {
          video: "src",
          source: "src",
          object: "src",
          embed: "src"
        }
      }
    }
  }
};
