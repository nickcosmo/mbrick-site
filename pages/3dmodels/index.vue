<template>
  <v-row>
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center display-4"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        3D MODELS
      </v-img>
    </v-col>
    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center">
        <iframe
          v-for="model in models"
          :key="model.url"
          class="ma-5"
          :src="model.url"
          height="352"
          width="500"
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
};
</script>