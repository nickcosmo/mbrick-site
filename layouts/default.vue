<template>
  <v-app dark v-scroll="topCheck">
    <MobileNav @close="showDrawer = !showDrawer" v-if="isMobile" :open="showDrawer" />
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
      <TheHeader :isMobile="isMobile" @openDrawer="showDrawer = !showDrawer" />
      <v-container fluid>
        <Nuxt :isMobile="isMobile" />
      </v-container>
    </v-main>
    <TheFooter :isMobile="isMobile" />
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  name: "default",
  data() {
    return {
      belowTop: false,
      showDrawer: false,
      isMobile: false
    };
  },
  methods: {
    setThumbnailImageHeight() {
      let imageHeight;
      let imageWidth;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          imageHeight = 200;
          imageWidth = 300;
          break;
        case "sm":
          imageHeight = 200;
          imageWidth = 300;
          break;
        case "md":
          imageHeight = 300;
          imageWidth = "100%";
          break;
        case "lg":
          imageHeight = 350;
          imageWidth = "100%";
          break;
        case "xl":
          imageHeight = 350;
          imageWidth = "100%";
          break;
      }
      this.$store.dispatch("images/updateThumbnailData", {
        height: imageHeight,
        width: imageWidth
      });
    },
    checkMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
        case "md":
          this.isMobile = true;
          break;
        default:
          this.isMobile = false;
      }
    },
    topCheck() {
      return window.pageYOffset > 0
        ? (this.belowTop = true)
        : (this.belowTop = false);
    },
    toTop() {
      return this.$vuetify.goTo(0);
    }
  },
  components: {
    TheHeader,
    TheFooter,
    MobileNav
  },
  mounted() {
    window.onNuxtReady(() => {
      this.topCheck();
      this.checkMobile();
      this.setThumbnailImageHeight();
      window.addEventListener(
        "resize",
        () => {
          switch (this.$vuetify.breakpoint.name) {
            case "xs":
            case "sm":
            case "md":
              this.isMobile = true;
              break;
            default:
              this.isMobile = false;
          }
        },
        { passive: true }
      );
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize");
  },
  created() {
    this.setThumbnailImageHeight();
  }
};
</script>

<style>
@font-face {
  font-family: "Jost";
  src: url("~assets/fonts/Jost-Regular.ttf") format("truetype");
}
</style>
