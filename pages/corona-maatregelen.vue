<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> Corona-maatregelen </span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ul class="text-body-1">
          <li>Mondmasker verplicht ( +6 jaar)</li>
          <li>
            Wacht bij het binnenkomen aan de lijn. U wordt zo snel mogelijk
            verder geholpen.
          </li>
          <li>
            Ontsmet je handen bij het binnenkomen (of na inleveren van je
            speelgoed)
          </li>
          <li>
            Hou voldoende afstand (1,5m). Dit is ook noodzakelijk terwijl u
            buiten moet wachten.
          </li>
        </ul>
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
      title: 'Corona-maatregelen',
    }
  },
})
</script>