<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center text-md-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-2.jpg')"
      >
        CONCRETE PATTERNS
      </v-img>
    </v-col>
    <v-row class="pa-0 ma-0 col-12 align-center justify-center">
      <v-col class="col-md-6 col-12">
        <a
          href="https://catalogs.mbrick.com/view/925856242/"
          class="fbo-embed"
          data-fbo-id="925856242"
          data-fbo-ratio="16:9"
          data-fbo-lightbox="yes"
          data-fbo-width="100%"
          data-fbo-height="auto"
          data-fbo-version="1"
          style="max-width: 100%"
          >TUMBLED BRICK BROCHURE</a
        >
        <script
          async
          defer
          src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=925856242"
        ></script>
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
