<template>
  <v-container fluid class="pa-0">
    <v-row class="py-10">
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h1 class="text-h3 pb-5">
                <span class="spellebel-title"> Contact </span>
              </h1>
            </v-col>
          </v-row>
          <v-row class="py-10">
            <v-col>
              Onze speel-o-theek kan je vinden in het Tempelhof.
              <br />De ingang is aan de achterkant (kant van het park) te
              vinden.
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="12" lg="3">
              <v-row align="center">
                <v-col cols="12">
                  <h3>Openingsuren</h3>
                </v-col>
                <v-col cols="1">
                  <v-icon :color="iconColor">{{ icons.clock }}</v-icon>
                </v-col>
                <v-col cols="11">
                  <p
                    v-for="hour in contact.hours"
                    :key="hour"
                    class="mb-0 ml-2"
                  >
                    {{ hour }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="3">
              <v-row align="center">
                <v-col cols="12">
                  <h3>Adres</h3>
                </v-col>
                <v-col cols="1">
                  <v-icon :color="iconColor">{{ icons.map }}</v-icon>
                </v-col>
                <v-col cols="11">
                  <p class="mb-0 ml-2">
                    {{ contact.address.street }}
                    {{ contact.address.number }}<br />
                    {{ contact.address.postal_code }}
                    {{ contact.address.city }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="3">
              <v-row align="center">
                <v-col cols="12">
                  <h3>Bellen en mailen</h3>
                </v-col>
                <v-col cols="1" class="pb-0">
                  <v-icon :color="iconColor">{{ icons.phone }}</v-icon>
                </v-col>
                <v-col cols="11" class="pb-0">
                  <p class="mb-0 ml-2">
                    <ExtLink :to="`tel:${contact.phone_number}`">
                      {{ contact.phone_number }}
                    </ExtLink>
                  </p>
                </v-col>
                <v-col cols="1">
                  <v-icon :color="iconColor">{{ icons.email }}</v-icon>
                </v-col>
                <v-col cols="11">
                  <p class="mb-0 ml-2">
                    <ExtLink :href="`mailto:${contact.email}`">
                      {{ contact.email }}
                    </ExtLink>
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="3">
              <v-row align="center">
                <v-col cols="12">
                  <h3>Overig</h3>
                </v-col>
                <v-col cols="1" class="pb-0">
                  <v-icon :color="iconColor">{{ icons.facebook }}</v-icon>
                </v-col>
                <v-col cols="11" class="pb-0">
                  <p class="mb-0 ml-2">
                    <ExtLink :to="contact.social.facebook.url">
                      {{ contact.social.facebook.name }}
                    </ExtLink>
                  </p>
                </v-col>
                <v-col cols="1">
                  <v-icon :color="iconColor">{{ icons.whatsapp }}</v-icon>
                </v-col>
                <v-col cols="11">
                  <p class="mb-0 ml-2">
                    <ExtLink :to="`tel:${contact.phone_number}`">
                      {{ contact.phone_number }}
                    </ExtLink>
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <client-only>
          <l-map
            :zoom="14"
            :maxZoom="18"
            :center="[map.coord.lat, map.coord.lng]"
            :options="map.mapOptions"
            style="height: 400px; z-index: 0"
          >
            <l-tile-layer
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
              :tileSize="512"
              :options="map.layerOptions"
            ></l-tile-layer>
            <l-marker :lat-lng="[map.coord.lat, map.coord.lng]">
              <l-icon
                :icon-size="[50, 50]"
                :icon-anchor="[25, 25]"
                icon-url="/img/map-marker.png"
              ></l-icon>
              <l-popup>Hello!</l-popup>
            </l-marker>
          </l-map>
        </client-only>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import {
  mdiAt,
  mdiClock,
  mdiFacebook,
  mdiMap,
  mdiPhone,
  mdiWhatsapp,
} from '@mdi/js'
import { CONTACT } from '../constants/contact'

export default Vue.extend({
  layout: 'no-footer',

  data() {
    return {
      contact: CONTACT,
      iconColor: 'blue lighten-1',
      icons: {
        clock: mdiClock,
        email: mdiAt,
        facebook: mdiFacebook,
        map: mdiMap,
        phone: mdiPhone,
        whatsapp: mdiWhatsapp,
      },
      map: {
        coord: {
          lat: 51.31812,
          lng: 4.85585,
        },
        mapOptions: {
          dragging: false,
          scrollWheelZoom: false,
          inertia: false,
          noMoveStart: true,
          tap: false,
        },
        layerOptions: {
          zoomOffset: -1,
          id: 'mapbox/streets-v11',
          accessToken:
            'pk.eyJ1Ijoic3BlbGxlYmVsIiwiYSI6ImNrdmd2bTBtNDBjN2syb212eTNqcWJvb2sifQ.QE8kTzgj8FL8b8V7jmjkWA',
        },
      },
    }
  },

  head(): MetaInfo {
    return {
      title: 'Contact',
    }
  },
})
</script>