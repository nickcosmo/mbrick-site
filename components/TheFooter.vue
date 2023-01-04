<template>
  <v-footer app absolute padless no-gutters class="pt-5 pt-sm-0">
    <v-row justify="center" no-gutters>
      <v-col
        class="col-12 col-md-6 d-flex justify-center justify-md-end align-center pr-md-4"
      >
        <v-img
          contain
          height="100%"
          max-width="160"
          :src="require('../static/ibs-white.png')"
        ></v-img>
      </v-col>
      <v-divider v-if="!isMobile" vertical class="my-4"></v-divider>
      <v-col
        class="col-12 col-md-6 py-4 pl-md-4 justify-center justify-md-start align-center"
      >
        <v-row no-gutters class="justify-center justify-md-start">
          <a href="mailto:contact@mbrick.com">
            <v-btn
              class="my-md-0 my-1 mx-0 px-3"
              :x-large="!isMobile"
              :small="isMobile"
              :block="isMobile"
              rounded
              text
            >
              <v-icon class="pr-2">mdi-email</v-icon>contact@mbrick.com
            </v-btn>
          </a>
        </v-row>
        <v-row no-gutters class="justify-center justify-md-start">
          <a href="tel:1-800-413-4588">
            <v-btn
              class="my-md-0 my-1 mx-0 px-3"
              :x-large="!isMobile"
              :small="isMobile"
              :block="isMobile"
              rounded
              text
            >
              <v-icon class="pr-2">mdi-phone</v-icon>1-800-413-4588
            </v-btn>
          </a>
        </v-row>
        <v-row no-gutters class="justify-center justify-md-start">
          <a>
            <v-btn
              class="my-md-0 my-1 mx-0 px-3"
              :x-large="!isMobile"
              :small="isMobile"
              :block="isMobile"
              rounded
              text
              style="overflow: hidden"
            >
              <v-icon class="pr-2">mdi-home</v-icon>
              1756 Panorama Point, Lafayette CO
            </v-btn>
          </a>
        </v-row>
        <v-row no-gutters class="justify-center justify-md-start">
          <a href="/">
            <v-btn
              class="my-md-0 my-1 mx-0 px-3"
              :x-large="!isMobile"
              :small="isMobile"
              :block="isMobile"
              text
              rounded
            >
              <v-icon class="pr-2">mdi-clock</v-icon>
              Mon - Fri: 8AM - 5PM MST
            </v-btn>
          </a>
        </v-row>
      </v-col>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>
          <v-icon class="pr-1">mdi-copyright</v-icon>Innovative Brick LLC
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: ["isMobile"]
};
</script>