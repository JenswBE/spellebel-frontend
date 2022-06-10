<template>
  <Aanbod title="Fantasie (F)" :products="products" />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Aanbod from '~/components/Aanbod.vue'

export default Vue.extend({
  components: { Aanbod },

  data: () => ({
    products: [
      '/img/aanbod-fantasie/fantasie-1.jpg',
      '/img/aanbod-fantasie/fantasie-2.jpg',
      '/img/aanbod-fantasie/fantasie-3.jpg',
      '/img/aanbod-fantasie/fantasie-4.jpg',
      '/img/aanbod-fantasie/fantasie-5.jpg',
      '/img/aanbod-fantasie/fantasie-6.jpg',
      '/img/aanbod-fantasie/fantasie-7.jpg',
      '/img/aanbod-fantasie/fantasie-8.jpg',
      '/img/aanbod-fantasie/fantasie-9.jpg',
      '/img/aanbod-fantasie/fantasie-10.jpg',
      '/img/aanbod-fantasie/fantasie-11.jpg',
      '/img/aanbod-fantasie/fantasie-12.jpg',
      '/img/aanbod-fantasie/fantasie-13.jpg',
      '/img/aanbod-fantasie/fantasie-14.jpg',
      '/img/aanbod-fantasie/fantasie-15.jpg',
      '/img/aanbod-fantasie/fantasie-16.jpg',
      '/img/aanbod-fantasie/fantasie-17.jpg',
      '/img/aanbod-fantasie/fantasie-18.jpg',
      '/img/aanbod-fantasie/fantasie-19.jpg',
      '/img/aanbod-fantasie/fantasie-20.jpg',
    ],
  }),

  head(): MetaInfo {
    return {
      title: 'Fantasie',
    }
  },
})
</script>
