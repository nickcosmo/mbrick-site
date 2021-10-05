<template>
  <v-app dark v-scroll="topCheck">
    <MobileNav @close="showDrawer = false" v-if="isMobile" :open="showDrawer" />
    <v-main>
      <v-btn
        style="z-index: 500"
        fab
        x-large
        fixed
        bottom
        right
        v-if="belowTop && !isMobile"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      <!-- <TopBar /> -->
      <TheHeader :isMobile="isMobile" @openDrawer="triggerDrawer" />
      <v-container fluid>
        <Nuxt :isMobile="isMobile" />
      </v-container>
      <TheFooter :isMobile="isMobile" />
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  name: "default",
  data() {
    return {
      belowTop: false,
      showDrawer: false,
      isMobile: false,
    };
  },
  methods: {
    checkMobile() {
      if (["xs", "sm"].indexOf(this.$vuetify.breakpoint.name) > -1) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    triggerDrawer() {
      this.showDrawer = !this.showDrawer;
    },
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
    MobileNav,
  },
  mounted() {
    window.onNuxtReady(() => {
      this.topCheck();
      this.checkMobile();
    });
  },
};
</script>

<style>
@font-face {
  font-family: "Jost";
  src: url("~assets/fonts/Jost-Regular.ttf") format("truetype");
}
</style>
