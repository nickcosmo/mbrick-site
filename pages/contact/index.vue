<template>
  <v-row justify="center" align="center">
    <!-- TODO Add contact form! -->
    <v-col cols="12" class="text-center ma-0 pa-0">
      <v-img
        max-height="700"
        width="100%"
        class="d-flex align-center mb-10"
        eager
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        <p class="text-md-h5 text-h6 mt-5">
          Let's get in touch!
        </p>
        <a href="tel:1-800-413-4588">
          <v-btn large rounded color="white" class="black--text my-5">
            call now 1-800-413-4588
          </v-btn>
        </a>
      </v-img>
    </v-col>
  </v-row>
</template>
