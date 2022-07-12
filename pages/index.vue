<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="text-center ma-0 pa-0">
      <v-img
        max-height="700"
        width="100%"
        class="d-flex align-center mb-10"
        eager
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('../static/brick-hero-alt.jpg')"
      >
        <h2 class="text-md-h3 text-sm-h4 text-h5 mt-5">INDUSTRY LEADER IN</h2>
        <h1 class="text-md-h1 text-h2 mt-5">CUSTOM THIN-BRICK DESIGN</h1>
        <p class="text-md-h5 text-h6 mt-5">
          Concrete Form Liners for Embedded Brick, Tile, and Stone Applications
        </p>
        <a href="tel:1-800-413-4588">
          <v-btn large rounded color="white" class="black--text my-5">
            call now 1-800-413-4588
          </v-btn>
        </a>
      </v-img>
      <v-row
        class="mt-md-12 mx-md-12 mx-3 mt-3 flex-column-reverse flex-md-row"
      >
        <v-col class="col-12 col-md-7">
          <v-card
            height="100%"
            color="#212121"
            class="
              d-flex
              justify-center
              flex-column
              elevation-0
              transparent
              text-left
            "
            style="wordbreak: normal"
          >
            <v-card-title class="text-md-h2 text-sm-h3 text-h4"
              >ARCHITECTS, PRECASTERS, TILT-UPS, AND CONTRACTORS</v-card-title
            >
            <v-card-text
              class="text-md-h5 text-sm-h6 text-body-1 mt-md-5 text-justify"
            >
              As the nation’s expert manufacturer of embedded thin brick systems
              for the precast concrete and tilt-wall industry, Innovative Brick
              provides top-level support for your projects. We create
              efficiencies with design consultation and budgetary estimating. We
              then provide full support including all materials and on-site
              training.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="col-12 col-md-5">
          <!-- TODO Update images from Mbrick archive -->
          <!-- prettier-ignore -->
          <v-img class="mx-auto" :height="imageHeight" max-height="700" max-width="700" :src="require('../static/main-garage.jpg')"></v-img>
        </v-col>
      </v-row>
      <v-row class="ma-md-12 ma-3 flex-column flex-md-row">
        <v-col class="col-12 col-md-5">
          <!-- prettier-ignore -->
          <v-img class="mx-auto" :height="imageHeight" max-height="700" max-width="700" :src="require('../static/main-brick.jpg')"></v-img>
        </v-col>
        <v-col class="col-12 col-md-7">
          <v-card
            height="100%"
            color="#212121"
            class="
              d-flex
              justify-center
              flex-column
              elevation-0
              transparent
              text-left
            "
          >
            <v-card-title class="text-md-h2 text-sm-h3 text-h4">
              ARCHITECTS SPECIFY OUR PRODUCTS
            </v-card-title>
            <v-card-text
              class="text-md-h5 text-sm-h6 text-body-1 mt-md-5 text-justify"
            >
              For their ease of use, reliability, and cost-efficient workflow
              methods. Contractors appreciate the quick cleanup process and
              lower labor costs. We can customize our liner panels to a variety
              of construction methods. From the early stages of design and brick
              layout to the final delivery and installation of the brick panels,
              we support your project every step of the way.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="no-gutters">
        <v-col class="col-md-6 mx-auto my-4 col-12 text-center">
          <v-card
            class="elevation-0 transparent d-flex flex-column align-center"
          >
            <v-card-title class="text-md-h2 text-md-h3 text-h4"
              >INNOVATIVE SOLUTIONS FOR ARCHITECTS</v-card-title
            >
            <v-card-text class="text-md-h5 text-sm-h6 text-body-1 mt-md-5">
              Include IBS in your Master Specs.
              <strong class="white--text">Click here</strong> to download
              Embedded Brick SCI 3-Part Specs and Embedded CMU Specs.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      imageHeight: null
    };
  },
  methods: {
    setImageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.imageHeight = 200;
          break;
        case "sm":
          this.imageHeight = 200;
          break;
        case "md":
          this.imageHeight = 300;
          break;
        case "lg":
          this.imageHeight = 400;
          break;
        case "xl":
          this.imageHeight = 500;
          break;
      }
    }
  },
  mounted() {
    window.onNuxtReady(() => {
      this.setImageHeight();
    });
  },
  created() {
    this.setImageHeight();
  }
};
</script>
