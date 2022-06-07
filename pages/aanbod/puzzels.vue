<template>
  <Aanbod title="Puzzels (P)" :products="products" />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Aanbod from '~/components/Aanbod.vue'

export default Vue.extend({
  components: { Aanbod },

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
  }),

  head(): MetaInfo {
    return {
      title: 'Puzzels',
    }
  },
})
</script>
