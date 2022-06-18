<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center  text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        THIN BRICK
      </v-img>
    </v-col>
    <v-row class="pa-0 ma-0 col-12 align-center justify-center">
      <v-col class="col-10 d-flex flex-wrap justify-center">
        <!-- <v-card 

          class="pa-0 ma-0"
        > -->
          <v-img
            v-for="product in products"
            :key="product.imageUrl"
            :src="product.imageUrl"
            :height="imageHeight"
            max-height="400"
            width="200"
            contain
            alt="Brick samples of endicott color options"
            class="ma-3"
          ></v-img>
          <!-- <v-card-title class="text-h3 justify-center">{{product.title}}</v-card-title> -->
        <!-- </v-card> -->
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  // TODO Add products to storyblok
  data() {
    return {
      imageHeight: null,
      imageWidth: null,
      products: [
        {
          title: "Thin Brick 1",
          imageUrl: require('@/static/endicott-manganese-ironspot-smooth.jpg'),
        },
        {
          title: "Thin Brick 2",
          imageUrl: require('@/static/endicott-red-ironspot-smooth.jpg'),
        },
        {
          title: "Thin Brick 3",
          imageUrl: require('@/static/endicott-rose-blend-velour.jpg'),
        },
        {
          title: "Thin Brick 4",
          imageUrl: require('@/static/endicott-sienna-ironspot-smooth.jpg'),
        },
      ]
    }
  },
    methods: {
    setImageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.imageWidth = 300;
          this.imageHeight = 180;
          break;
        case "sm":
          this.imageWidth = 300;
          this.imageHeight = 180;
          break;
        case "md":
          this.imageWidth = 500;
          this.imageHeight = 240;
          break;
        case "lg":
          this.imageWidth = 500;
          this.imageHeight = 240;
          break;
        case "xl":
          this.imageWidth = 500;
          this.imageHeight = 300;
          break;
      }
    },
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
