<template>
  <a
    :href="to"
    rel="noopener"
    class="text-decoration-none"
    :target="newTab ? '_blank' : '_self'"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'ExtLink',

  props: {
    to: {
      type: String,
      required: true,
    } as PropOptions<String>,
    newTab: {
      type: Boolean,
      default: true,
    } as PropOptions<Boolean>,
  },
})
</script>