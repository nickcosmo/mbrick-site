<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center  text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero-alt.jpg')"
      >
        ENDICOTT BRICK
      </v-img>
    </v-col>
    <v-row class="pa-0 ma-0 col-12 align-center justify-center">
      <v-col class="col-10 d-flex flex-wrap justify-center">
        <v-card 
          class="pa-0 ma-5"
          style="background-color: #121212;"
          width="300"
          flat
          v-for="product in paginatedProds" :key="product.id"
        >
        <div class="text-wrap" style="width: 100%;">
          <v-img
            :src="product.filename"
            height="180"
            width="100%"
            :alt="product.alt"
          >
          </v-img>
          <v-card tile outlined class= "ma-0 pa-0" width="100%" style="background-color: #121212;">
            <v-card-subtitle class="text-subtitle-2 text-center justify-center pa-2" style="overflow-wrap: break-word; overflow: hidden;">{{product.title}}</v-card-subtitle>
            <!-- <v-card-text>Get more details here...</v-card-text> -->
          </v-card>
        </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="getEndicottProducts.length > 20" class="ma-0 pa-0">
      <v-col cols="12">
        <v-pagination
          v-model="page"
          :length="Math.ceil(getEndicottProducts.length/20)"
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
      starts_with: "products/endicott-brick"
    })
    .then(res => {
      context.store.dispatch(
        "fetchEndicottProducts",
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
      page: 1,
    }
  },
  computed: {
    ...mapGetters({
      getEndicottProducts: "getEndicottProducts",
      getEndicottProductsPaginated: "getEndicottProductsPaginated",
    }),
    paginatedProds() {
      return this.getEndicottProductsPaginated(this.page - 1);
    },
  }
};
</script>
