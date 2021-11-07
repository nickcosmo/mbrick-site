<template>
  <v-row>
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="300"
        class="
          d-flex
          justify-center
          align-center
          text-center
          text-md-h1
          text-h2
          text-uppercase
        "
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        {{ project.title }}
      </v-img>
      <v-row no-gutters class="align-center justify-center px-10 px-md-0">
        <v-col class="col-12 col-md-6">
          <v-card class="pa-0">
            <v-carousel cycle :height="imageHeight" :show-arrows="true" hide-delimiters>
              <v-carousel-item v-for="image in images" :key="image.id">
                <v-img
                  class="mx-auto"
                  width="100%"
                  :height="imageHeight"
                  :src="image.filename"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-text class="pb-0">
              <v-list class="pa-0">
                <v-list-item class="px-0 text-subtitle-1 text-md-h6">
                  {{ project.description }}
                </v-list-item>
                <v-list-item class="px-0 text-subtitle-1 text-md-h6">
                  Location: {{ project.location }}
                </v-list-item>
                <v-list-item class="px-0 text-subtitle-1 text-md-h6">
                  Precaster: {{ project.precaster }}
                </v-list-item>
                <v-list-item class="px-0 text-subtitle-1 text-md-h6">
                  Completion Date: {{ project.date }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  asyncData(context) {
    if (context.store.state.projects.precast.length) {
      return {
        images: [],
        imageHeight: null
      };
    } else {
      context.redirect("/");
    }
  },
  methods: {
    setImageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.imageHeight = 300;
          break;
        case "sm":
          this.imageHeight = 300;
          break;
        case "md":
          this.imageHeight = 400;
          break;
        case "lg":
          this.imageHeight = 500;
          break;
        case "xl":
          this.imageHeight = 600;
          break;
      }
    }
  },
  computed: {
    project() {
      return this.$store.getters.getSinglePrecastProject(
        this.$route.params.projectid
      );
    }
  },
  mounted() {
    window.onNuxtReady(() => {
      this.setImageHeight();
    });
  },
  created() {
    this.images = this.project.images;
    this.setImageHeight();
  }
};
</script>
