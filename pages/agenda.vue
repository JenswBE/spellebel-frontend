<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> Agenda </span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="0" xl="6">
        <p>Vanaf september bestaan wij 20 jaar!</p>
        <p>
          Dat vieren wij heel graag met al onze leden, want zonder jullie konden
          wij geen 20 jaar bestaan.
        </p>
        <p>We starten ons feestjaar met een heus feestweekend:</p>
        <p><span class="font-weight-bold">Zaterdag 1 oktober</span></p>
        <p>
          Spellebel is zoals elke zaterdag open van 9u30 tot 12u. We steken het
          dit keer in een feestelijk jasje. De rode loper, een drankje, balonnen
          en versiering mag je zeker verwachten.
        </p>
        <p class="pt-3">
          <span class="font-weight-bold">Zondag 2 oktober</span>
        </p>
        <p>
          FAMILIEFEEST 13u30 - 18u in het Park Tempelhof (achter Spellebel)
          Ontmoeting en Spel Volkspelen, toog, terras en ijsjes 16u extra
          animatie
        </p>
      </v-col>
      <v-col sm="10" offset-sm="1" md="4" offset-md="0" xl="3" offset-xl="1">
        <v-img :src="flyerSrc(500, 500)" :lazy-src="flyerSrc(50, 50)"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  layout: 'no-footer',

  data() {
    return {}
  },

  methods: {
    flyerSrc(w: number, h: number): string {
      return this.$img(
        '/img/flyer-feestweekend.jpg',
        { quality: 80, fit: 'inside' },
        { width: w, height: h }
      )
    },
  },

  head(): MetaInfo {
    return {
      title: 'Agenda',
    }
  },
})
</script>
