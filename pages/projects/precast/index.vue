<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center display-4"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        PRECAST
      </v-img>
    </v-col>
    <v-row class="px-md-0 px-10">
      <v-col class="col-12 col-md-6 mx-auto">
        <p class="text-md-h6 text-subtitle-1">
          Our precast technology is state of the art. Just ask Roy Donk, he was
          a regular on the colgate comedy hour and used to play jazz flute with
          a kink.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center">
        <nuxt-link
          v-for="project in getProjects"
          :key="project.id"
          :to="'/projects/precast/' + project.id"
        >
          <v-img
            class="ma-5 image-hover align-center text-center"
            :src="project.images[0].filename"
            height="352"
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
  asyncData(context) {
    if (context.store.state.projects.length) {
      return null;
    }
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "tiltupprojects/",
      })
      .then((res) => {
        context.store.dispatch(
          "fetchAllProjects",
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
  },
  computed: {
    ...mapGetters(["getProjects"]),
  },
};
</script>