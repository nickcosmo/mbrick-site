<template>
  <v-toolbar class="pa-0 ma-0" height="100" color="#FAFAFA">
    <nuxt-link to="/">
      <v-img
        contain
        height="100%"
        max-width="160"
        :src="require('../static/ibs-black.png')"
      ></v-img>
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon
      color="black"
      v-if="isMobile"
      @click.stop="openDrawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-items v-if="!isMobile">
      <nuxt-link to="/">
        <v-btn class="black--text" height="100%" x-large tile text nuxt>
          Home
        </v-btn>
      </nuxt-link>
      <v-menu offset-y rounded="0" transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="black--text" v-bind="attrs" v-on="on" x-large tile text>
            Products
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list color="#FAFAFA">
          <v-list-item-group>
            <nuxt-link to="/products/embedded_brick">
              <v-list-item>
                <v-list-item-title class="black--text" nuxt>
                  Embedded Brick
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/products/concrete_patterns">
              <v-list-item>
                <v-list-item-title class="black--text" nuxt>
                  Concrete Patterns
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/products/thin_brick">
              <v-list-item>
                <v-list-item-title class="black--text" nuxt>
                  Thin Brick
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-menu offset-y rounded="0" transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="black--text" v-bind="attrs" v-on="on" x-large tile text>
            Project Profiles
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list color="#FAFAFA">
          <v-list-item-group>
            <nuxt-link to="/projects/tilt-up">
              <v-list-item nuxt color="black">
                <v-list-item-title class="black--text" nuxt>
                  Tilt-Up
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/projects/precast">
              <v-list-item nuxt color="black">
                <v-list-item-title class="black--text" nuxt>
                  Precast
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <nuxt-link to="/3dmodels">
        <v-btn class="black--text" height="100%" nuxt x-large tile text
          >3D Models</v-btn
        >
      </nuxt-link>
      <nuxt-link to="/video_tutorials">
        <v-btn class="black--text" height="100%" x-large nuxt tile text
          >Video Tutorials</v-btn
        >
      </nuxt-link>
      <nuxt-link to="/about">
        <v-btn class="black--text" height="100%" x-large nuxt tile text>
          About
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/contact">
        <v-btn class="black--text" height="100%" x-large nuxt tile text>
          Contact
        </v-btn>
      </nuxt-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ["isMobile"],
  methods: {
    openDrawer() {
      this.$emit("openDrawer");
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.nuxt-link-exact-active {
  padding: 0;
  margin: 0;
}
</style>