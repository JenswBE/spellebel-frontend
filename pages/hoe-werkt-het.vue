<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> Hoe werkt het? </span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h4">Abonnement</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>
          Naargelang je abonnement, kan je 3 of 6 stuks speelgoed uit ons
          assortiment kiezen. Het speelgoed dat bij ons in de rekken staat heeft
          altijd een bijgevoegd onderdelenblad. Hierop staat alles wat er in je
          spel of doos zit. Wanneer je het speelgoed terug brengt kan je thuis
          alles nog eens natellen, eventueel verloren onderdelen weer bij elkaar
          zoeken en op die manier weer alles volledig bij ons binnen brengen.
        </p>
        <p>
          Wanneer je het speelgoed bij ons inlevert zullen wij dit alsnog
          natellen. Zo kunnen wij steeds garant staan voor volledig en
          kwaliteitvol speelgoed dat opnieuw uitgeleend kan worden. Onze
          uitleenperiode is altijd 3 weken, je mag alsnodig 1 keer verlengen.
          Dat kan je via
          <nuxt-link to="/contact">sms/telefoon/voicemail/mail</nuxt-link>
          vermeld altijd zeker je naam en lidnummer.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h4">Uitlening verlengen</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>
          De uitleenperiode van een speelgoed kan na normale uitleentermijn zonodig éénmalig verlengd worden 
          met één uitleenperiode onder de voorwaarde dat het betreffende spelmateriaal niet gereserveerd is 
          door een andere ontlener.
        </p>
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
      title: 'Hoe werkt het?',
    }
  },
})
</script>