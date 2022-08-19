<template>
  <v-row>
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center  text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero-alt.jpg')"
      >
        THIN BRICK
      </v-img>
    </v-col>
    <v-row class="pa-0 ma-0 col-12 align-center justify-center">
        <v-col cols="8" class="col-8 d-flex flex-wrap justify-center">
            <v-card class="ma-3 pa-3" tile>
                <nuxt-link
                    style="padding: 0; margin: 0;"
                    to="/products/thin_brick/metro-brick"
                >
                    <v-img
                        contain
                        :src="require('@/static/metro-brick-logo.png')"
                    ></v-img>
                </nuxt-link>
            </v-card>
            <v-card class="ma-3 pa-3" tile>
                <nuxt-link
                    style="padding: 0; margin: 0;"
                    to="/products/thin_brick/endicott-brick"
                >
                    <v-img
                        contain
                        :src="require('@/static/endicott-brick-logo.png')"
                    ></v-img>
                </nuxt-link>
            </v-card>
            <!-- <v-card class="ma-3 pa-3" tile>
                <nuxt-link
                    style="padding: 0; margin: 0;"
                    to="/products/thin_brick/metro-brick"
                >
                    <v-img
                        contain
                        :src="require('@/static/general-shale-logo.png')"
                    ></v-img>
                </nuxt-link>
            </v-card>
            <v-card class="ma-3 pa-3" tile>
                <nuxt-link
                    style="padding: 0; margin: 0;"
                    to="/products/thin_brick/metro-brick"
                >
                    <v-img
                        contain
                        :src="require('@/static/summitville-logo.png')"
                    ></v-img>
                </nuxt-link>
            </v-card> -->
        </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {

};
</script>
