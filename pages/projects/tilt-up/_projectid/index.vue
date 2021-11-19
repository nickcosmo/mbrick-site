<template>
  <v-row>
    <v-overlay z-index="500" opacity="0.9" v-if="showCarousel">
      <v-row>
        <v-btn @click="showCarousel = !showCarousel" fab fixed top right dark>
          <v-icon dark>
            mdi-close
          </v-icon>
        </v-btn>
        <v-col class="mx-auto col-7 col-md-12">
          <v-carousel height="imageHeight">
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
        </v-col>
      </v-row>
    </v-overlay>
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
      <v-row no-gutters class="align-center justify-center px-5 px-md-0">
        <v-col class="col-12 col-md-7">
          <v-card class="pa-0" tile>
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
      <v-row no-gutters class="align-center justify-center px-5 px-md-0 mx-md-n5">
        <v-col class="col-12 col-md-7 d-flex flex-wrap">
          <v-img
            v-for="image in images"
            :key="image.id"
            height="352"
            width="300"
            :src="image.filename"
            class="ma-md-3 my-3"
            @click="showCarousel = !showCarousel"
            style="cursor: pointer;"
          ></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  asyncData(context) {
    if (context.store.state.projects.tiltup.length) {
      return {
        images: [],
        imageHeight: null,
        showCarousel: false
      };
    } else {
      context.redirect("/");
    }
  },
  computed: {
    project() {
      return this.$store.getters.getSingleTiltUpProject(
        this.$route.params.projectid
      );
    }
  },
  created() {
    this.images = this.project.images;
  }
};
</script>
