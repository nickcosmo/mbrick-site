<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center display-4"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        VERSA LINER
      </v-img>
    </v-col>
    <v-row
      class="pa-0 ma-0 col-12 align-center justify-center"
    >
      <v-col cols="4">
        <v-card height="400">
          <v-card-title class="display-1">Coming Soon...</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  // TODO Add products to storyblok
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get("cdn/stories", {
  //       version: context.isDev ? "draft" : "published",
  //       starts_with: "tiltupprojects/",
  //     })
  //     .then((res) => {
  //       return {
  //         projects: res.data.stories.map((item) => {
  //           return {
  //             id: item.content._uid,
  //             title: item.content.title,
  //             description: item.content.description,
  //             location: item.content.location,
  //             precaster: item.content.precaster,
  //             imageUrl: item.content.image.filename,
  //             date: item.content.date,
  //           };
  //         }),
  //       };
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // },
};
</script>