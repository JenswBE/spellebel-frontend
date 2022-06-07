<template>
  <Aanbod title="Beweging (B)" :products="products" />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Aanbod from '~/components/Aanbod.vue'

export default Vue.extend({
  components: { Aanbod },

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
  }),

  head(): MetaInfo {
    return {
      title: 'Beweging / Buiten',
    }
  },
})
</script>
