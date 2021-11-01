<template>
  <v-app>
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
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="white" id="spellebel-footer">
      <v-container class="pt-16 pb-5">
        <v-row>
          <v-col>
            <nuxt-link to="/" nuxt>
              <v-img
                src="/img/logo-small.png"
                alt="Spellebel"
                width="100"
                height="100"
              />
            </nuxt-link>
          </v-col>
          <v-col>
            <v-row>
              <v-col>
                <p>
                  <a
                    class="text-decoration-none"
                    :href="`tel:${contact.phone_number}`"
                  >
                    {{ contact.phone_number }}
                  </a>
                </p>
                <p>
                  <a
                    class="text-decoration-none"
                    :href="`mailto:${contact.email}`"
                    target="_blank"
                  >
                    {{ contact.email }}
                  </a>
                </p>
              </v-col>
              <v-col>
                <p>
                  {{ contact.address.street }}
                  {{ contact.address.number }}<br />
                  {{ contact.address.postal_code }}
                  {{ contact.address.city }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              &copy; {{ new Date().getFullYear() }} Spellebel - Made by
              <ExtLink to="https://jensw.be">Jensw.be</ExtLink>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style>
#spellebel-logo::before {
  opacity: 0;
}

#spellebel-logo:hover::before {
  opacity: 0.09;
}

#spellebel-footer {
  border-top: 1px solid #e3e3e3 !important;
}

.spellebel-title {
  /* lime */
  border-bottom: 5px solid #cddc39;
}
</style>

<script lang="ts">
import { NavItem } from '../interfaces/NavItem.interface'
import NavList from '../components/NavList.vue'
import { CONTACT } from '../constants/contact'
import {
  mdiAccountCircle,
  mdiCardAccountPhone,
  mdiHandWash,
  mdiHelpCircle,
  mdiHome,
  mdiMenu,
  mdiTeddyBear,
} from '@mdi/js'

export default {
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
          icon: mdiAccountCircle,
          name: 'Wie zijn we?',
          to: '/wie-zijn-we',
        },
        {
          icon: mdiHelpCircle,
          name: 'Hoe werkt het?',
          to: '/hoe-werkt-het',
        },
        {
          icon: mdiTeddyBear,
          name: 'Catalogus',
          to: '/catalogus',
        },
        {
          icon: mdiHandWash,
          name: 'Corona-maatregelen',
          to: '/corona-maatregelen',
        },
        {
          icon: mdiCardAccountPhone,
          name: 'Contact',
          to: '/contact',
        },
      ] as NavItem[],

      // Contact details
      contact: CONTACT,
    }
  },

  components: { NavList },
}
</script>
