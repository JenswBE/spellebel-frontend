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
      <p class="text-h4">
        <span class="font-weight-bold">Vakantie 2023</span>
      </p>
    </v-row>
    <v-row>
      <p>
        <v-img max-width="400" src="/img/nieuws/2023-07_Vakantie_1.jpg"></v-img><v-img max-width="400" src="/img/nieuws/2023-07_Vakantie_2.jpg"></v-img>
      </p>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="0" xl="6">
        <p>In september 2023 bestonden wij 20 jaar!</p>
        <p>
          Dat wilden we graag vieren met al onze leden, want zonder jullie konden
          wij geen 20 jaar bestaan.
        </p>
        <p>We startten ons feestjaar met een heus feestweekend:</p>
        <p><span class="font-weight-bold">Zaterdag 1 oktober</span></p>
        <p>
          Spellebel was open van 9u30 tot 12u. We staken het dit keer in een feestelijk jasje : Rode loper, een drankje, balonnen en versiering.
        </p>
        <p class="pt-3">
          <span class="font-weight-bold">Zondag 2 oktober</span>
        </p>
        <p>
          Het werd een heus FAMILIEFEEST in het Park Tempelhof (achter Spellebel) met ontmoeting - spel - volkspelen - toog - terras en ...
        </p>
        <p class="pt-3">
          <span class="font-weight-bold">KINDERBINGO !!!</span>
        </p>
        <p>
          Op zondag 5 maart waren jullie welkom op Speelplein Don Bosco voor onze kinderbingo.
          Tussendoor wass er ook tijd en ruimte om te spelen en ravotten in de speeltuin, om iets te drinken, ...
        </p>
      </v-col>
      <v-col sm="10" offset-sm="1" md="4" offset-md="0" xl="3" offset-xl="1">
        <! v-img :src="flyerSrc(500, 500)" :lazy-src="flyerSrc(50, 50)">
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
        '/img/agenda/2023-03-05_Bingo.jpg',
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
