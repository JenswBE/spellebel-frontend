<template>
  <v-container fluid class="pa-0">
    <v-row class="pt-15 pb-10">
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h1 class="text-h3">Contact</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ul>
                <li>Mondmasker verplicht ( +12 jaar)</li>
                <li>
                  Wacht bij het binnenkomen aan de lijn. U wordt zo snel
                  mogelijk verder geholpen.
                </li>
                <li>
                  Er mogen maar 2 personen (+12 jaar) tegelijkertijd in de
                  speel-o-theek binnen.
                </li>
                <li>
                  Voor uw &amp; onze veiligheid : kom - indien mogelijk - zonder
                  kinderen (en liefst alleen).
                </li>
                <li>Beperk je bezoek tot maximum 30 minuten.</li>
                <li>
                  Ontsmet je handen bij het binnenkomen (of na inleveren van je
                  speelgoed)
                </li>
                <li>
                  Hou voldoende afstand (1,5m). Dit is ook noodzakelijk terwijl
                  u buiten moet wachten.
                </li>
              </ul>
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
            <l-marker :lat-lng="[map.coord.lat, map.coord.lng]"></l-marker>
          </l-map>
        </client-only>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  data() {
    return {
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