<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> Beweging (B)</span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text to="/aanbod" exact>
          <v-icon left>{{ icons.arrowLeft }}</v-icon>
          Terug naar overzicht
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-body-1">
          Dit zijn maar enkele voorbeelden van ons aanbod. Kom zeker eens langs
          om alles te ontdekken!
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="2"
        v-for="product in products"
        :key="product"
      >
        <v-card>
          <v-img :src="product" height="300px"> </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text to="/aanbod" exact>
          <v-icon left>{{ icons.arrowLeft }}</v-icon>
          Terug naar overzicht
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { mdiArrowLeft } from '@mdi/js'

export default Vue.extend({
  data: () => ({
    products: [
      '/img/aanbod-beweging/beweging-1.jpg',
      '/img/aanbod-beweging/beweging-2.jpg',
      '/img/aanbod-beweging/beweging-3.jpg',
      '/img/aanbod-beweging/beweging-4.jpg',
      '/img/aanbod-beweging/beweging-5.jpg',
      '/img/aanbod-beweging/beweging-6.jpg',
      '/img/aanbod-beweging/beweging-7.jpg',
      '/img/aanbod-beweging/beweging-8.jpg',
      '/img/aanbod-beweging/beweging-9.jpg',
      '/img/aanbod-beweging/beweging-10.jpg',
      '/img/aanbod-beweging/beweging-11.jpg',
      '/img/aanbod-beweging/beweging-12.jpg',
      '/img/aanbod-beweging/beweging-13.jpg',
      '/img/aanbod-beweging/beweging-14.jpg',
      '/img/aanbod-beweging/beweging-15.jpg',
      '/img/aanbod-beweging/beweging-16.jpg',
      '/img/aanbod-beweging/beweging-17.jpg',
      '/img/aanbod-beweging/beweging-18.jpg',
    ],
    icons: {
      arrowLeft: mdiArrowLeft,
    },
  }),

  head(): MetaInfo {
    return {
      title: 'Beweging / Buiten',
    }
  },
})
</script>
