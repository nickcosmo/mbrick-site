<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero-alt.jpg')"
      >
        VIDEO TUTORIALS
      </v-img>
    </v-col>
    <v-row class="pa-0 ma-0">
      <v-col
        class="col-md-10 col-12 mx-auto pa-0 d-flex flex-wrap justify-center"
      >
        <iframe
          v-for="model in models"
          :key="model.url"
          class="ma-sm-5 my-5"
          :src="model.url"
          :height="imageHeight"
          :width="imageWidth"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      imageHeight: null,
      imageWidth: null,
      models: [
        {
          url: "https://www.youtube.com/embed/U9RNtIhbicQ"
        },
        {
          url: "https://www.youtube.com/embed/zdjRZx4KERw"
        },
        {
          url: "https://www.youtube.com/embed/QuZV2kTTc60"
        },
        {
          url: "https://www.youtube.com/embed/Dzltdk1MDXw"
        }
      ]
    };
  },
  methods: {
    setImageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.imageWidth = 300;
          this.imageHeight = 180;
          break;
        case "sm":
          this.imageWidth = 300;
          this.imageHeight = 180;
          break;
        case "md":
          this.imageWidth = 400;
          this.imageHeight = 240;
          break;
        case "lg":
          this.imageWidth = 400;
          this.imageHeight = 240;
          break;
        case "xl":
          this.imageWidth = 500;
          this.imageHeight = 300;
          break;
      }
    }
  },
  mounted() {
    window.onNuxtReady(() => {
      this.setImageHeight();
    });
  },
  created() {
    this.setImageHeight();
  }
};
</script>
