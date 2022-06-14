<template>
  <Aanbod
    title="Gezelschapspellen (G)"
    :products="products"
    description="Onze gezelschapspelen zijn opgedeeld in 4 leeftijdsgroepen met elk een eigen kleur.<br>
         Deze kan je telkens terug vinden op de doos: groen (2+) - rood (4+) - geel (6+) - blauw (8+)."
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Aanbod from '~/components/Aanbod.vue'

export default Vue.extend({
  components: { Aanbod },

  data: () => ({
    products: [
      '/img/aanbod-gezelschapspellen/gezelschapspellen-1.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-2.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-3.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-4.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-5.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-6.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-7.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-8.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-9.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-10.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-11.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-12.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-13.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-14.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-15.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-16.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-17.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-18.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-19.jpg',
      '/img/aanbod-gezelschapspellen/gezelschapspellen-20.jpg',
    ],
  }),

  head(): MetaInfo {
    return {
      title: 'Gezelschapspellen',
    }
  },
})
</script>
