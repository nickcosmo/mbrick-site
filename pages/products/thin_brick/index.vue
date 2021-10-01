<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center display-4"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        THIN BRICK
      </v-img>
    </v-col>
    <v-row
      v-for="(project, i) in projects"
      :key="project.id"
      class="pa-0 ma-0 col-12 align-center justify-center"
    >
      <v-col v-if="i > 0" cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="4">
        <v-card height="400">
          <v-card-title class="display-1">{{ project.title }}</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item class="headline">{{
                project.description
              }}</v-list-item>
              <v-list-item class="headline"
                >Location: {{ project.location }}</v-list-item
              >
              <v-list-item class="headline"
                >Precaster: {{ project.precaster }}</v-list-item
              >
              <v-list-item class="headline"
                >Completion Date: {{ project.date }}</v-list-item
              >
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-img
          class="mx-auto"
          height="400"
          max-height="700"
          max-width="700"
          :src="project.imageUrl"
        ></v-img>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        // TODO adjust this based on env
        version: "draft",
        starts_with: "tiltupprojects/",
      })
      .then((res) => {
        return {
          projects: res.data.stories.map((item) => {
            return {
              id: item.content._uid,
              title: item.content.title,
              description: item.content.description,
              location: item.content.location,
              precaster: item.content.precaster,
              imageUrl: item.content.image.filename,
              date: item.content.date,
            };
          }),
        };
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>