<template>
  <v-row>
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        3D MODELS
      </v-img>
    </v-col>
    <v-row class="pa-0 ma-0">
      <v-col class="col-md-10 col-12 mx-auto pa-0 d-flex flex-wrap justify-center">
        <iframe
          v-for="model in models"
          :key="model.url"
          class="ma-sm-5 my-5"
          :src="model.url"
          :height="imageHeight"
          :width="imageWidth"
          frameborder="0"
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
          url: "https://sketchfab.com/3d-models/aa-type-2-0414a6108d6b4dbb866025ba09bfd4a4/embed",
        },
        {
          url: "https://sketchfab.com/3d-models/bmox-angled-panel-detail-6e762aacd36f4036a23e24465f5a8f24/embed",
        },
        {
          url: "https://sketchfab.com/3d-models/wpa-high-school-south-west-elevation-ed6c7d33659e4250b8fc78e1f5ab3548/embed",
        },
        {
          url: "https://sketchfab.com/3d-models/pres-mon-precast-jennings-office-complex-96a4d7164986402e88ce80721e1d039f/embed",
        },
      ],
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
    },
  },
  mounted() {
    window.onNuxtReady(() => {
      this.setImageHeight();
    });
  },
  created() {
    this.setImageHeight();
  },
};
</script>