<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center text-sm-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero-alt.jpg')"
      >
        PRECAST PROJECTS
      </v-img>
    </v-col>
    <!-- <v-row class="ma-0">
      <v-col class="col-12 col-md-6 mx-auto px-md-0 px-5">
        <v-divider></v-divider>
        <p class="text-md-h6 text-subtitle-1 my-5 text-justify">
          Our precast technology is state of the art. Just ask Roy Donk, he was
          a regular on the colgate comedy hour and used to play jazz flute with
          a kink.
        </p>
        <v-divider></v-divider>
      </v-col>
    </v-row> -->
    <v-row class="ma-0">
      <v-col cols="12" class="ma-0 pa-0 d-flex flex-wrap justify-center">
        <nuxt-link
          style="padding: 0; margin: 0"
          v-for="project in getPrecastProjects"
          :key="project.id"
          :to="'/projects/precast/' + project.slug"
        >
          <v-img
            class="ma-5 image-hover align-center text-center"
            :src="project.images[0].filename"
            :height="imageHeight"
            :width="imageWidth"
            max-height="400"
            max-width="500"
          >
            <div
              style="
                height: 100%;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.5);
              "
            >
              <h3 class="text-md-h3 text-sm-h4 text-h5 text-uppercase">
                {{ project.title }}
              </h3>
            </div>
          </v-img>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async asyncData(context) {
    if (context.store.state.projects.precast.length) {
      return {
        imageHeight: null,
        imageWidth: null,
      };
    }
    const projectData = await context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "projects/precast/",
      })
      .then((res) => {
        context.store.dispatch(
          "fetchPrecastProjects",
          res.data.stories.map((item) => {
            return {
              id: item.content._uid,
              title: item.content.title,
              description: item.content.description,
              location: item.content.location,
              precaster: item.content.precaster,
              images: Array.isArray(item.content.image)
                ? item.content.image
                : [item.content.image],
              date: item.content.date,
              slug: item.slug,
            };
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });

    return {
      ...projectData,
      imageHeight: null,
      imageWidth: null,
    };
  },
  methods: {
    setImageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.imageHeight = 200;
          this.imageWidth = 300;
          break;
        case "sm":
          this.imageHeight = 200;
          this.imageWidth = 300;
          break;
        case "md":
          this.imageHeight = 300;
          this.imageWidth = "100%";
          break;
        case "lg":
          this.imageHeight = 350;
          this.imageWidth = "100%";
          break;
        case "xl":
          this.imageHeight = 350;
          this.imageWidth = "100%";
          break;
      }
    },
  },
  computed: {
    ...mapGetters({
      getPrecastProjects: "getPrecastProjects",
      // getThumbnailImageHeight: "images/getThumbnailImageHeight",
      // getThumbnailImageWidth: "images/getThumbnailImageWidth"
    }),
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
