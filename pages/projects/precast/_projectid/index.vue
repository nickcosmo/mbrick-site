<template>
  <v-row>
    <v-col cols="12" class="ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center display-4"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        PROJECT
      </v-img>
      <v-col cols="12">
        <v-row no-gutters class="align-center justify-center">
          <!-- Project {{ $route.params.projectid }} -->
          <v-col cols="4">
            <v-card height="500">
              <v-card-title class="display-1">Jennings Office</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item class="headline">
                    Jennings office project. Its super cool!!
                  </v-list-item>
                  <v-list-item class="headline"
                    >Location: Portland, OR</v-list-item
                  >
                  <v-list-item class="headline"
                    >Precaster: Olympic Precast</v-list-item
                  >
                  <v-list-item class="headline"
                    >Completion Date: 10/12/2021</v-list-item
                  >
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-carousel :show-arrows="false" hide-delimiter-background>
              <v-carousel-item v-for="image in images" :key="image">
                <v-img
                  class="mx-auto"
                  height="500"
                  max-height="700"
                  max-width="700"
                  :src="image"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1568539314706-f17c0e60d96d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJyaWNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1614350646685-157ee8e4a25e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyaWNrJTIwYnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ],
    };
  },
  //   asyncData(context) {
  //     return context.app.$storyapi
  //       .get("cdn/stories/tiltupprojects/" + context.params.projectid, {
  //         version: context.isDev ? "draft" : "published",
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         return {
  //           projects: null,
  //         };
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   },
};
</script>