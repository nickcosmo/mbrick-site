<template>
  <v-app dark v-scroll="topCheck">
    <v-main>
      <v-btn
        style="z-index: 500"
        fab
        x-large
        fixed
        bottom
        right
        v-if="belowTop"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      <!-- <TopBar /> -->
      <TheHeader />
      <v-container fluid>
        <Nuxt />
      </v-container>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  data() {
    return {
      belowTop: false,
    };
  },
  methods: {
    topCheck() {
      return window.pageYOffset > 0
        ? (this.belowTop = true)
        : (this.belowTop = false);
    },
    toTop() {
      return this.$vuetify.goTo(0);
    },
  },
  components: {
    TopBar,
    TheHeader,
    TheFooter,
  },
  mounted() {
    window.onNuxtReady(() => {
      this.topCheck();
    });
  },
};
</script>

<style>
  @font-face {
    font-family: 'Jost';
    src: url('~assets/fonts/Jost-Regular.ttf') format('truetype');
  }
</style>
