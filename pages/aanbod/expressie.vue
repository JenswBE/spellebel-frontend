<template>
  <Aanbod title="Expressie (E)" :products="products" />
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
      title: 'Expressie',
    }
  },
})
</script>
