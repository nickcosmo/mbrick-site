<template>
  <v-navigation-drawer @click.stop="log" temporary app bottom v-model="status">
    <v-list nav>
      <v-list-item-group v-model="group">
        <nuxt-link to="/">
          <v-list-item nuxt link>
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item>
        </nuxt-link>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title> Products </v-list-item-title>
          </template>
          <nuxt-link to="/products/embedded_brick">
            <v-list-item class="pl-10" nuxt link>
              <v-list-item-title> Embedded Brick </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/products/concrete_patterns">
            <v-list-item class="pl-10" nuxt link>
              <v-list-item-title> Concrete Patterns </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/products/thin_brick">
            <v-list-item class="pl-10" nuxt link>
              <v-list-item-title> Thin Brick </v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title> Projects </v-list-item-title>
          </template>
          <nuxt-link to="/projects/tilt-up">
            <v-list-item class="pl-10" nuxt link>
              <v-list-item-title> Tilt-Up </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/projects/precast">
            <v-list-item class="pl-10" nuxt link>
              <v-list-item-title> Precast </v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list-group>
        <nuxt-link to="/3dmodels">
          <v-list-item nuxt link>
            <v-list-item-title> 3D Models </v-list-item-title>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/video_tutorials">
          <v-list-item nuxt link>
            <v-list-item-title> Video Tutorials </v-list-item-title>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/about">
          <v-list-item nuxt link>
            <v-list-item-title> About </v-list-item-title>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/contact">
          <v-list-item nuxt link>
            <v-list-item-title> Contact </v-list-item-title>
          </v-list-item>
        </nuxt-link>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["open"],
  data() {
    return {
      status: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.status = false
      this.$emit("close");
    },
    open(newVal, oldVal) {
      if (newVal) {
        this.status = true;
      } else {
        this.status = false;
      }
    },
  },
};
</script>