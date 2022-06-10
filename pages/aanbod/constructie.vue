<template>
  <Aanbod title="Constructie (C)" :products="products" />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Aanbod from '~/components/Aanbod.vue'

export default Vue.extend({
  components: { Aanbod },

  data: () => ({
    products: [
      '/img/aanbod-constructie/constructie-1.jpg',
      '/img/aanbod-constructie/constructie-2.jpg',
      '/img/aanbod-constructie/constructie-3.jpg',
      '/img/aanbod-constructie/constructie-4.jpg',
      '/img/aanbod-constructie/constructie-5.jpg',
      '/img/aanbod-constructie/constructie-6.jpg',
      '/img/aanbod-constructie/constructie-7.jpg',
      '/img/aanbod-constructie/constructie-8.jpg',
      '/img/aanbod-constructie/constructie-9.jpg',
      '/img/aanbod-constructie/constructie-10.jpg',
      '/img/aanbod-constructie/constructie-11.jpg',
      '/img/aanbod-constructie/constructie-12.jpg',
      '/img/aanbod-constructie/constructie-13.jpg',
      '/img/aanbod-constructie/constructie-14.jpg',
      '/img/aanbod-constructie/constructie-15.jpg',
      '/img/aanbod-constructie/constructie-16.jpg',
      '/img/aanbod-constructie/constructie-17.jpg',
      '/img/aanbod-constructie/constructie-18.jpg',
      '/img/aanbod-constructie/constructie-19.jpg',
      '/img/aanbod-constructie/constructie-20.jpg',
    ],
  }),

  head(): MetaInfo {
    return {
      title: 'Constructie',
    }
  },
})
</script>
