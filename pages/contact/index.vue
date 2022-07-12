<template>
  <v-row justify="center" align="center">
    <!-- TODO Add contact form! -->
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero-alt.jpg')"
      >
        LET'S TALK BRICK!
      </v-img>
      <v-row class="d-flex flex-column align-center justify-center ma-0 pa-0">
        <v-col class="col-md-5 col-12 px-8 px-md-0 ma-0 py-0">
          <v-card tile outlined style="background-color: #121212;">
            <v-card-title class="text-md-h4 text-h5 font-weight-bold">
              Innovative Brick, LLC Broomfield, CO
            </v-card-title>
            <v-card-subtitle class="text-subtitle-1 text-md-h6">
              Please contact us for technical asistance or questions about your
              next thin brick project.
            </v-card-subtitle>
            <v-card-text>
              <v-list style="background-color: #121212;">
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
        <v-col class="col-md-5 col-12 align-center text-center px-8 px-md-0 ma-0">
          <a
            href="https://www.google.com/maps/place/Innovative+Brick+Systems/@39.9084192,-105.0751496,15z/data=!4m5!3m4!1s0x0:0x7054d0219d3e7d45!8m2!3d39.9083797!4d-105.0751196"
          >
            <v-img
              :src="require('@/static/map-pic.jpg')"
              max-height="700"
              width="100%"
              alt="MBRICK - Innovative Brick Systems location in Broomfield Colorado"
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
  }
};
</script>
