<template>
  <v-toolbar class="pa-0 ma-0" color="#FAFAFA">
    <v-btn>LOGO HERE</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <nuxt-link to="/">
        <v-btn class="black--text" height="100%" x-large tile text nuxt
          >Home</v-btn
        >
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
            <nuxt-link to="/products/versa_liner">
              <v-list-item>
                <v-list-item-title class="black--text" nuxt>
                  Versa Liner
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link to="/products/mcast">
              <v-list-item>
                <v-list-item-title class="black--text" nuxt>
                  Mcast
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
      <v-btn class="black--text" x-large tile text>3D Models</v-btn>
      <v-btn class="black--text" x-large tile text>Video Tutorials</v-btn>
      <v-btn class="black--text" x-large tile text>About</v-btn>
      <v-btn class="black--text" x-large tile text>Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
a {
  text-decoration: none;
}

.nuxt-link-exact-active {
  padding: 0;
  margin: 0;
}
</style>