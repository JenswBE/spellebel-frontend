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
                    src="/img/logo-small.png"
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
    <v-row class="py-10">
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h2 class="text-h4">Jouw bibliotheek voor speelgoed</h2>
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
    <v-row class="blue lighten-1 py-8">
      <v-col>
        <v-container>
          <v-row align="center">
            <v-col cols="10" offset="1" sm="3" offset-sm="0">
              <v-img src="/img/nieuwtje-small.jpg" class="rounded-circle" />
            </v-col>
            <v-col cols="12" sm="9">
              <h2 class="text-h4 pb-2">Nieuwtje !</h2>
              <p class="text-body-1">
                <br>Onze speel-o-theek bestaat in september 2022 al 20 jaar! We zullen dit zeker vieren en houden jullie hiervan via onze website en sociale media op de hoogte !   
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="py-15">
      <v-col lg="6" offset-lg="3" class="pt-10">
        <v-container>
          <v-row align="center">
            <v-col cols="10" offset="1" lg="3">
              <v-img src="/img/corona-small.jpg" class="rounded-circle" />
            </v-col>
            <v-col order-lg="first">
              <h2 class="text-h4 pb-2">Corona-maatregelen</h2>
              <p>
                Helaas moeten we ons nog steeds houden aan de
                Corona-maatregelen.
              </p>
              <p>Vergeet daarom zeker jullie masker niet!</p>
              <p>
                Neem daarnaast ook even een kijkje bij
                <nuxt-link to="/corona-maatregelen">
                  de andere maatregelen
                </nuxt-link>
                .
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row no-gutters class="py-15">
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h2 class="text-h4 pb-5">Spellebel in cijfers</h2>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12" lg="4">
              <p class="text-center text-h6">
                <v-icon x-large :color="iconColor"> {{ icons.members }}</v-icon>
                250+
              </p>
              <p class="text-center text-uppercase font-weight-bold">leden</p>
            </v-col>
            <v-col cols="12" lg="4">
              <p class="text-center text-h6">
                <v-icon x-large :color="iconColor"> {{ icons.toys }}</v-icon>
                500+
              </p>
              <p class="text-center text-uppercase font-weight-bold">
                stukken speelgoed
              </p>
            </v-col>
            <v-col cols="12" lg="4">
              <p class="text-center text-h6">
                <v-icon x-large :color="iconColor"> {{ icons.members }}</v-icon>
                250+
              </p>
              <p class="text-center text-uppercase font-weight-bold">
                vrijwilligers
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
import { mdiAccountMultiple, mdiTeddyBear } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      iconColor: 'blue lighten-1',
      icons: {
        members: mdiAccountMultiple,
        toys: mdiTeddyBear,
      },
    }
  },

  head(): MetaInfo {
    return {
      title: 'Spellebel',
      titleTemplate: '',
    }
  },
})
</script>