<template>
  <Aanbod title="Speciaal (S)" :products="products" />
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Aanbod from '~/components/Aanbod.vue'

export default Vue.extend({
  components: { Aanbod },

  data: () => ({
    products: ['/img/binnen.jpg'],
  }),

  head(): MetaInfo {
    return {
      title: 'Puzzels',
    }
  },
})
</script>
