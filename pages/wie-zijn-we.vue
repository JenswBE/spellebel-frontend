<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> Wie zijn we? </span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h4">Vrijwilligers</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p class="font-weight-bold text-center pt-5">
          Wij noemen onze vrijwilligers SPULMERS.
          <br>Dit letterwoord komt van SPeelotheek-UitLeenMedewekERS 
        </p>
        <p>
          Foto SPULMERS
        </p>
        <p class="font-weight-bold text-center pt-5">
          Word jij ook graag spulmer?
          <br>Neem dan alvast een kijkje op <nuxt-link to="/spulmer-worden">deze pagina</nuxt-link> !
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h4">RVB</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>
          Foto RVB.
        </p>
        <p>
          Tekst RVB door Hild ...
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="10" offset-lg="1">
        <v-img src="/img/team-small.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head(): MetaInfo {
    return {
      title: 'Wie zijn we?',
    }
  },
})
</script>