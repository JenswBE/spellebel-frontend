<template>
  <div>
    <v-navigation-drawer
      disable-resize-watcher
      v-model="drawer"
      app
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <NavList :items="navItems" />
    </v-navigation-drawer>
    <v-app-bar fixed app elevation="0">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-items>
        <v-btn id="spellebel-logo" text nuxt exact to="/">Spellebel</v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <template v-for="navItem in navItems">
          <v-btn
            v-if="!navItem.subItems"
            :key="navItem.to"
            text
            :to="navItem.to"
            nuxt
            exact
          >
            {{ navItem.name }}
          </v-btn>
          <v-menu
            v-else
            :key="navItem.to"
            offset-y
            bottom
            open-on-hover
            content-class="elevation-0"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on" :to="navItem.to" nuxt>
                {{ navItem.name }}
              </v-btn>
            </template>
            <v-list class="pt-0">
              <v-list-item
                v-for="subItem in navItem.subItems"
                :key="subItem.to"
                :to="subItem.to"
                nuxt
                exact
              >
                <v-list-item-title>{{ subItem.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<style>
#spellebel-logo::before {
  opacity: 0;
}

#spellebel-logo:hover::before {
  opacity: 0.09;
}
</style>

<script lang="ts">
import Vue from 'vue'
import {
  mdiAccountCircle,
  mdiCardAccountPhone,
  mdiHandWash,
  mdiHelpCircle,
  mdiHome,
  mdiMenu,
  mdiTeddyBear,
} from '@mdi/js'
import { NavItem } from '../interfaces/NavItem.interface'

export default Vue.extend({
  name: 'Footer',

  data() {
    return {
      // General
      drawer: false,
      icons: {
        menu: mdiMenu,
      },
      navItems: [
        {
          icon: mdiHome,
          name: 'Start',
          to: '/',
        },
        {
          icon: mdiHelpCircle,
          name: 'Hoe werkt het?',
          to: '/hoe-werkt-het',
        },
        {
          icon: mdiTeddyBear,
          name: 'Aanbod',
          to: '/aanbod',
        },
        {
          icon: mdiAccountCircle,
          name: 'Wie zijn we?',
          to: '/wie-zijn-we',
        },
        {
          icon: mdiCardAccountPhone,
          name: 'Contact',
          to: '/contact',
        },
        {
          icon: mdiHandWash,
          name: 'Corona-maatregelen',
          to: '/corona-maatregelen',
        },
      ] as NavItem[],
    }
  },
})
</script>