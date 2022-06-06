<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> Wil je ook meewerken aan onze speel-o-theek ? </span>
        </h1>
      </v-col>
    </v-row>    <v-row>
      <v-col class="text-body-1">
        <p>
          Onze spulmers zeggen zelf dat dit de belangrijkste eigenschappen zijn van een goede spulmer ...
        </p>
        <p>
           <v-img max-width="750" src="/img/SPULMER-Kernwoorden.png"></v-img>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <p>
        Wil je eens komen proberen of heb je graag een woordje uitleg ?
      </p>
      <p>
        Vul dan onderstaande gegevens in en wij nemen contact met je op !
      </p>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  layout: 'no-footer',

  head(): MetaInfo {
    return {
      title: 'Hoe werkt het?',
    }
  },
})
</script>