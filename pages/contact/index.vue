<template>
  <v-row justify="center" align="center">
    <!-- TODO Add contact form! -->
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="700"
        width="100%"
        class="d-flex align-center mb-10"
        eager
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        <v-row>
          <v-col class="text-center">
            <p class="text-md-h1 text-h2 my-5">
              LET'S TALK BRICK!
            </p>
          </v-col>
        </v-row>
        <v-row class="d-flex flex-column flex-md-row align-center justify-center">
          <v-col class="col-md-5 col-12">
            <v-card height="450" tile class="mb-1">
              <v-card-title class="text-md-h4 text-h5 font-weight-bold">
                Innovative Brick, LLC Broomfield, CO
              </v-card-title>
              <v-card-subtitle class="text-subtitle-1 text-md-h6">
                Please contact us for technical asistance or questions about your next thin brick
                project.
              </v-card-subtitle>
              <v-card-text>
                <v-list>
                  <v-list-item class="text-subtitle-1 text-md-h6">
                    Call us now: 1-800-413-4588
                  </v-list-item>
                  <v-list-item class="text-subtitle-1 text-md-h6">
                    Email: contact@mbrick.com
                  </v-list-item>
                  <v-list-item class="text-subtitle-1 text-md-h6">
                    Drop by: 11625 Reed Court, Broomfield, CO, 80020
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="col-md-5 col-12 align-center text-center">
            <iframe
              width="600"
              height="450"
              style="border:0"
              loading="lazy"
              allowfullscreen
              :src="mapUrl"
            >
            </iframe>
          </v-col>
        </v-row>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      mapUrl: `https://www.google.com/maps/embed/v1/place?key=${process.env.GMAPS_KEY}&q=Innovative+Brick+Systems,Broomfield+CO`
    };
  }
};
</script>
