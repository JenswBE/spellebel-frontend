<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col>
        <v-img eager src="/img/raam.jpg" height="95vh">
          <v-container fill-height>
            <v-row>
              <v-col cols="10" offset="1" lg="6" offset-lg="3">
                <div
                  class="
                    d-flex
                    flex-column
                    align-center
                    lime
                    rounded-circle
                    pa-15
                  "
                >
                  <p class="text-h3 text-center">
                    <span class="px-5 pt-1 pb-2">Welkom bij</span>
                  </p>
                  <v-img
                    src="/img/logo-full.png"
                    alt="Spellebel"
                    class="align-self-center"
                  />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h2 class="text-h4 pt-10">Jouw bibliotheek voor speelgoed</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-body-1">
                Spellebel is een speel-o-theek. Bij ons kan je speelgoed
                uitlenen, gelijkaardig als bij een bibliotheek. Wij streven er
                naar om kwaliteitvol speelgoed aan te bieden, zodat onze leden
                &hellip; Het grote voordeel aan een speel-o-theek is toch dat je
                ook eens ander, groter of duurder speelgoed kan uitlenen en
                achteraf gewoon weer kan terug brengen. Ook heel handig voor als
                je een spel leent dat je eigenlijk niet bevalt, je kan het
                gewoon weer terug brengen. Zo is er thuis steeds een verscheiden
                aanbod aan materiaal en heb je geen last van uitpuilende kasten.
              </p>
            </v-col>
          </v-row>
        </v-container>
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
      title: 'Start',
    }
  },
})
</script>