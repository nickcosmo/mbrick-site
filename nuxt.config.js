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
    ["@nuxtjs/sitemap"],
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

  sitemap: {
    hostname: "https://mbrick.com",
    routes: [
      "projects/precast/walters-and-wolf-1180-main",
      "projects/precast/stubbes-precast-kokomo",
      "projects/precast/cast-stone-river-front",
      "projects/precast/cast-stone-hamblin",
      "projects/precast/cast-stone-hamblin",
      "projects/precast/clark-pacific-placer-county",
      "projects/precast/coreslab-ct-108x-bronx",
      "projects/precast/coreslab-bayside-ny",
      "projects/precast/coreslab-mt-sinai-hospital",
      "projects/precast/dura-stress-duke-power",
      "projects/precast/dura-stress-the-hub",
      "projects/precast/molin-precast-berg",
      "projects/precast/stress-con-fort-carson-barracks",
      "projects/precast/bethlehem-precast-rboc",
      "projects/precast/pgh-arden-station",
      "projects/precast/metromont-sc-mint-street",
      "projects/precast/metromont-sc-ncino",
      "projects/precast/gage-brothers-jefferson-hs",
      "projects/precast/gage-brothers-270-hennipen",
      "projects/precast/gage-brothers-sioux-center-high-school",
      "projects/precast/gage-brothers-our-lady-of-grace",
      "projects/precast/gage-brothers-the-expo",
      "projects/precast/kerkstra-precast-goshen",
      "projects/precast/coreslab-white-plains-hospital",
      "projects/precast/global-precast-stock-yards",
      "projects/precast/global-precast-west-donlands",
      "projects/precast/global-precast-indigo-3",
      "projects/precast/clark-pacific-kettner-building",
      "projects/precast/olympia-precast-wsu",
      "projects/precast/virgin-hotel",
      "projects/precast/braves-stadium",
      "projects/precast/auburn-university",
      "projects/precast/wayzata-parking-deck",
      "projects/tilt-up/scientech-building",
      "projects/tilt-up/iron-bridge",
      "projects/tilt-up/cary-christian",
      "projects/tilt-up/bedford-baptist",
      "projects/tilt-up/bay-meadows",
      "projects/tilt-up/american-lafrance"
    ]
  },

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
    }
  }
};
