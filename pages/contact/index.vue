<template>
  <v-row justify="center" align="center">
    <!-- TODO Add contact form! -->
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        LET'S TALK BRICK!
      </v-img>
      <v-row class="d-flex flex-column flex-md-row align-center justify-center">
        <v-col class="col-md-5 col-12 px-8 px-md-0">
          <v-card :height="cardHeight" tile class="mb-md-1">
            <v-card-title class="text-md-h4 text-h5 font-weight-bold">
              Innovative Brick, LLC Broomfield, CO
            </v-card-title>
            <v-card-subtitle class="text-subtitle-1 text-md-h6">
              Please contact us for technical asistance or questions about your
              next thin brick project.
            </v-card-subtitle>
            <v-card-text>
              <v-list>
                <v-list-item class="text-subtitle-1 text-md-h6">
                  Call: 1-800-413-4588
                </v-list-item>
                <v-list-item class="text-subtitle-1 text-md-h6">
                  Email: contact@mbrick.com
                </v-list-item>
                <v-list-item class="text-subtitle-1 text-md-h6">
                  11625 Reed Court, Broomfield, CO, 80020
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          class="col-md-5 col-12 align-center text-center px-8 px-md-0 pt-0 pt-md-6"
        >
          <a
            href="https://www.google.com/maps/place/Innovative+Brick+Systems/@39.9084192,-105.0751496,15z/data=!4m5!3m4!1s0x0:0x7054d0219d3e7d45!8m2!3d39.9083797!4d-105.0751196"
          >
            <v-img
              :src="require('@/static/map-pic.jpg')"
              max-height="700"
              width="100%"
            >
            </v-img>
          </a>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      imageHeight: 200,
      imageWidth: null,
      cardHeight: null
    };
  },
  methods: {
    setImageDim() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.imageHeight = "auto";
          this.imageWidth = 300;
          break;
        case "sm":
          this.imageHeight = "auto";
          this.imageWidth = 300;
          break;
        case "md":
          this.imageHeight = 300;
          this.imageWidth = "100%";
          break;
        case "lg":
          this.imageHeight = 350;
          this.imageWidth = "100%";
          break;
        case "xl":
          this.imageHeight = 350;
          this.imageWidth = "100%";
          break;
      }
    },
    setCardDim() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          this.cardHeight = "auto";
          break;
        case "md":
          this.cardHeight = "auto";
          break;
        case "lg":
          this.cardHeight = "auto";
          break;
        case "xl":
          this.cardHeight = 500;
          break;
      }
    }
  },
  mounted() {
    window.onNuxtReady(() => {
      this.setImageDim();
      this.setCardDim();
    });
  },
  created() {
    this.setImageDim();
    this.setCardDim();
  }
};
</script>
