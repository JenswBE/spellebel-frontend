<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title">Puzzels (P)</span>
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
      '/img/aanbod-puzzels/puzzels-1.jpg',
      '/img/aanbod-puzzels/puzzels-2.jpg',
      '/img/aanbod-puzzels/puzzels-3.jpg',
      '/img/aanbod-puzzels/puzzels-4.jpg',
      '/img/aanbod-puzzels/puzzels-5.jpg',
      '/img/aanbod-puzzels/puzzels-6.jpg',
      '/img/aanbod-puzzels/puzzels-7.jpg',
      '/img/aanbod-puzzels/puzzels-8.jpg',
      '/img/aanbod-puzzels/puzzels-9.jpg',
      '/img/aanbod-puzzels/puzzels-10.jpg',
      '/img/aanbod-puzzels/puzzels-11.jpg',
      '/img/aanbod-puzzels/puzzels-12.jpg',
      '/img/aanbod-puzzels/puzzels-13.jpg',
      '/img/aanbod-puzzels/puzzels-14.jpg',
      '/img/aanbod-puzzels/puzzels-15.jpg',
      '/img/aanbod-puzzels/puzzels-16.jpg',
      '/img/aanbod-puzzels/puzzels-17.jpg',
      '/img/aanbod-puzzels/puzzels-18.jpg',
      '/img/aanbod-puzzels/puzzels-19.jpg',
      '/img/aanbod-puzzels/puzzels-20.jpg',
    ],
    icons: {
      arrowLeft: mdiArrowLeft,
    },
  }),

  head(): MetaInfo {
    return {
      title: 'Puzzels',
    }
  },
})
</script>
