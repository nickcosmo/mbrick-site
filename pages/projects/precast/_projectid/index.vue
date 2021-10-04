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
          display-4
          text-uppercase
        "
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        {{ project.title }}
      </v-img>
      <v-row no-gutters class="align-center justify-center px-10 px-md-0">
        <v-col class="col-12 col-md-6">
          <v-card class="pa-3">
            <v-carousel :show-arrows="false">
              <v-carousel-item v-for="image in images" :key="image.id">
                <v-img
                  class="mx-auto"
                  width="100%"
                  max-height="700"
                  max-width="700"
                  :src="image.filename"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
            <v-card-text>
              <v-list>
                <v-list-item class="text-subtitle-1 text-md-h6">
                  {{ project.description }}
                </v-list-item>
                <v-list-item class="text-subtitle-1 text-md-h6">
                  Location: {{ project.location }}
                </v-list-item>
                <v-list-item class="text-subtitle-1 text-md-h6">
                  Precaster: {{ project.precaster }}
                </v-list-item>
                <v-list-item class="text-subtitle-1 text-md-h6">
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
    if (context.store.state.projects.length) {
      return {
        images: [],
      };
    } else {
      context.redirect("/");
    }
  },
  computed: {
    project() {
      return this.$store.getters.getSingleProject(this.$route.params.projectid);
    },
  },
  created() {
    this.images = this.project.images;
  },
};
</script>