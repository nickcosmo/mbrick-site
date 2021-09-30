<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center display-4"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero.jpg')"
      >
        VIDEO TUTORIALS
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
          url: "https://www.youtube.com/embed/U9RNtIhbicQ",
        },
        {
          url: "https://www.youtube.com/embed/zdjRZx4KERw",
        },
        {
          url: "https://www.youtube.com/embed/QuZV2kTTc60",
        },
        {
          url: "https://www.youtube.com/embed/Dzltdk1MDXw",
        },
      ],
    };
  },
};
</script>