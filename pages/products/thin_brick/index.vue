<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center  text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero-alt.jpg')"
      >
        THIN BRICK
      </v-img>
    </v-col>
    <v-row class="pa-0 ma-0 col-12 align-center justify-center">
      <v-col class="col-10 d-flex flex-wrap justify-center">
        <!-- <v-card 
          class="pa-0 ma-0"
          width="200"
        > -->
        <div v-for="product in paginatedProds" :key="product.id" class="my-3 mx-10 text-wrap">
          <v-img
            :src="product.filename"
            width="300"
            contain
            :alt="product.alt"
          >
          </v-img>
          <v-card tile outlined class= "ma-0" width="100%" style="background-color: #121212;">
            <v-card-title class="text-h6 text-wrap justify-center" style="overflow-wrap: break-word;">{{product.title}}</v-card-title>
            <!-- <v-card-text>Get more details here...</v-card-text> -->
          </v-card>
        </div>
        <!-- </v-card> -->
      </v-col>
    </v-row>
    <v-row v-if="getThinBrickProducts.length > 20" class="ma-0 pa-0">
      <v-col cols="12">
        <v-pagination
          v-model="page"
          :length="Math.floor(getThinBrickProducts.length/20)"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async asyncData(context) {
  const products = await context.app.$storyapi
    .get("cdn/stories", {
      version: context.isDev ? "draft" : "published",
      starts_with: "products/"
    })
    .then(res => {
      context.store.dispatch(
        "fetchThinBrickProducts",
        res.data.stories[0].content.images.map(item => {
          return item;
        })
      );
    })
    .catch(err => {
      console.error(err);
    });

    return {
      ...products,
      page: 0,
    }
  },
  computed: {
    ...mapGetters({
      getThinBrickProducts: "getThinBrickProducts",
      getThinBrickProductsPaginated: "getThinBrickProductsPaginated",
    }),
    paginatedProds() {
      return this.getThinBrickProductsPaginated(this.page);
    },
  }
};
</script>
