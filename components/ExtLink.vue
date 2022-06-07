<template>
  <a
    :href="to"
    rel="noopener"
    :class="classes"
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
    removeUnderline: {
      type: Boolean,
      default: false,
    } as PropOptions<Boolean>,
  },

  computed: {
    classes() {
      let classesList = [] as String[]
      if (this.removeUnderline) {
        classesList.push('text-decoration-none')
      }
      return classesList
    },
  },
})
</script>
