<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <!-- <v-list>
        <v-list-item>
          <v-list-item-icon><v-icon>mdi-email</v-icon></v-list-item-icon>
          <v-list-item-title>contact@mbrick.com</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon><v-icon>mdi-phone</v-icon></v-list-item-icon>
          <v-list-item-title>1-800-413-4588</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
          <v-list-item-title>
            11625 Reed Court Broomfield, CO 80020
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon><v-icon>mdi-clock</v-icon></v-list-item-icon>
          <v-list-item-title>Mon - Fri: 8AM - 5PM MST</v-list-item-title>
        </v-list-item>
      </v-list> -->
      <v-col class="py-4 d-flex justify-space-around" cols="12">
        <v-btn x-large rounded text
          ><v-icon class="pr-2">mdi-email</v-icon>contact@mbrick.com</v-btn
        >
        <v-btn x-large rounded text
          ><v-icon class="pr-2">mdi-phone</v-icon>1-800-413-4588</v-btn
        >
        <v-btn x-large rounded text
          ><v-icon class="pr-2">mdi-home</v-icon>11625 Reed Court Broomfield, CO
          80020</v-btn
        >
        <v-btn x-large text rounded>
          <v-icon class="pr-2">mdi-clock</v-icon>
          Mon - Fri: 8AM - 5PM MST
        </v-btn>
      </v-col>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong
          ><v-icon class="pr-1">mdi-copyright</v-icon>Innovative Brick
          LLC</strong
        >
      </v-col>
    </v-row>
  </v-footer>
</template>