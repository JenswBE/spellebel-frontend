<template>
  <v-list>
    <template v-for="navItem in items">
      <NavListItem v-if="!navItem.subItems" :key="navItem.to" :item="navItem" />

      <v-list-group v-else :key="navItem.to" :prepend-icon="navItem.icon">
        <template v-slot:activator>
          <v-list-item-content :to="navItem.to">
            <v-list-item-title v-text="navItem.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <NavListItem
          v-for="subItem in navItem.subItems"
          :key="subItem.to"
          :item="subItem"
        />
      </v-list-group>
    </template>
  </v-list>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import { NavItem } from '../interfaces/NavItem.interface'
import NavListItem from './NavListItem.vue'

export default Vue.extend({
  name: 'NavList',

  props: {
    items: {
      type: Array,
      required: true,
    } as PropOptions<NavItem[]>,
  },

  components: { NavListItem },
})
</script>
