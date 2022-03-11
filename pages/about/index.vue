<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12 ma-0 pa-0">
          <v-img
            max-height="300"
            class="
              d-flex
              justify-center
              align-center
              text-center
              text-md-h1 text-h2
            "
            gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
            :src="require('@/static/brick-2.jpg')"
          >
            THE MBRICK STORY
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
                  >RELIABLY PRODUCING EMBEDDED BRICKS IN COLORADO</v-card-title
                >
                <v-card-text
                  class="text-md-h5 text-sm-h6 text-body-1 mt-md-5 text-justify"
                >
                  Innovative Brick Systems was founded and still resides along
                  the front range of the Colorado Rocky Mountains. All of our
                  products are made right here in Colorado. Our team is here to
                  make your project go as smoothly as possible.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="col-12 col-md-5">
              <!-- TODO Update images from mbrick archive -->
              <!-- prettier-ignore -->
              <v-img class="mx-auto" :height="imageHeight" max-height="700" max-width="700" :src="require('@/static/main-garage.jpg')"></v-img>
            </v-col>
          </v-row>
          <v-row class="ma-md-12 ma-3 flex-column flex-md-row">
            <v-col class="col-12 col-md-5">
              <!-- prettier-ignore -->
              <v-img class="mx-auto" :height="imageHeight" max-height="700" max-width="700" :src="require('@/static/main-brick.jpg')"></v-img>
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
                  THE BILL AND MARK STORY
                </v-card-title>
                <v-card-text
                  class="text-md-h5 text-sm-h6 text-body-1 mt-md-5 text-justify"
                >
                  Innovative Brick Systems was founded in 1997 by brothers Mark
                  and Bill Scott. They started the company out of their garage.
                  From that point, they were able to grow into a company that
                  produces millions of square feet of product a year with 15
                  employees. <br />
                  <br />
                  Innovative Brick Systems has remained its family orientation
                  and face-to-face, personable customer service. Our company
                  looks to preserve close relationships with customers and
                  colleagues within the precast and tilt-up industry as we
                  continue to expand.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      imageHeight: null,
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
          this.imageHeight = 500;
          break;
        case "xl":
          this.imageHeight = 500;
          break;
      }
    },
  },
  mounted() {
    window.onNuxtReady(() => {
      this.setImageHeight();
    });
  },
  created() {
    this.setImageHeight();
  },
};
</script>