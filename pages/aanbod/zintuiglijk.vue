<template>
  <Aanbod title="Zintuiglijk (Z)" :products="products" />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Aanbod from '~/components/Aanbod.vue'

export default Vue.extend({
  components: { Aanbod },

  data: () => ({
    products: [
      '/img/aanbod-zintuiglijk/zintuiglijk-1.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-2.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-3.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-4.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-5.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-6.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-7.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-8.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-9.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-10.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-11.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-12.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-13.jpg',
      '/img/aanbod-zintuiglijk/zintuiglijk-14.jpg',
    ],
  }),

  head(): MetaInfo {
    return {
      title: 'Zintuiglijk',
    }
  },
})
</script>
