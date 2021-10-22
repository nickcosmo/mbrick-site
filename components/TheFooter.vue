<template>
  <v-footer padless class="mt-6" no-gutters>
    <v-row justify="center" no-gutters>
      <v-col
        class="py-4 d-flex flex-md-row flex-column justify-space-around"
        cols="12"
      >
        <v-btn
          class="my-md-0 my-1 mx-0 px-3"
          :x-large="!isMobile"
          :small="isMobile"
          :block="isMobile"
          rounded
          text
          ><v-icon class="pr-2">mdi-email</v-icon>contact@mbrick.com</v-btn
        >
        <v-btn
          class="my-md-0 my-1 mx-0 px-3"
          :x-large="!isMobile"
          :small="isMobile"
          :block="isMobile"
          rounded
          text
          ><v-icon class="pr-2">mdi-phone</v-icon>1-800-413-4588</v-btn
        >
        <v-btn
          class="my-md-0 my-1 mx-0 px-3"
          :x-large="!isMobile"
          :small="isMobile"
          :block="isMobile"
          rounded
          text
          style="overflow: hidden"
        >
          <v-icon class="pr-2">mdi-home</v-icon>11625 Reed Court Broomfield CO
        </v-btn>
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
      </v-col>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong
          ><v-icon class="pr-1">mdi-copyright</v-icon>Innovative Brick
          LLC</strong
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: ["isMobile"],
};
</script>