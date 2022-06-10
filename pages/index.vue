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
               Spellebel is een speel-o-theek. Bij ons kan je speelgoed uitlenen, net zoals een bibliotheek dat met boeken doet. 
               <br>Wij streven er naar om een verscheiden aanbod aan te bieden. Zo kan je er heel wat “ander” speelgoed vinden 
               dan dat je thuis al in de kast hebt liggen of wil kopen.
              </p>
              <p>
                Spelen is voor iedereen, klein of groot.<br>
	                Soms ben je leeuw of danser of piloot.<br><br>
                Spelen is winnen en soms ook verliezen.<br>
	                Soms beslist de andere, soms moet jij kiezen.<br><br>
                Spelen is denken en tellen van 2, 4, 6, 8.<br>
	                Jij gaat verstoppen en ik sta op wacht.<br><br>
                Spelen is hoelahoepen of racen, alleen of met 2.<br>
	                Spelen is zeggen: ‘Doe jij ook mee?’<br><br>
                Spelen is waarheid, durven of doen.<br>
	                Iedereen is held, iedereen is kampioen.<br><br>
                Spelen is proberen, soms meerdere keren.<br><br>
	                Spelen is een recht want spelen is leren.
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
                <br>Onze speel-o-theek bestaat in september 2022 al 20 jaar! <br>We zullen dit zeker vieren en houden jullie hiervan via onze website en sociale media op de hoogte !   
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
                200+
              </p>
              <p class="text-center text-uppercase font-weight-bold">leden</p>
            </v-col>
            <v-col cols="12" lg="4">
              <p class="text-center text-h6">
                <v-icon x-large :color="iconColor"> {{ icons.toys }}</v-icon>
                1000+
              </p>
              <p class="text-center text-uppercase font-weight-bold">
                stukken speelgoed
              </p>
            </v-col>
            <v-col cols="12" lg="4">
              <p class="text-center text-h6">
                <v-icon x-large :color="iconColor"> {{ icons.members }}</v-icon>
                40+
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