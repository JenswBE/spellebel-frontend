<template>
  <v-list-item :to="item.to" nuxt exact>
    <v-list-item-action>
      <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="item.name" />
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { NavSubItem } from '../interfaces/NavItem.interface'

export default Vue.extend({
  name: 'NavListItem',

  props: {
    item: {
      type: Object,
      required: true,
    } as PropOptions<NavSubItem>,
  },
})
</script>
