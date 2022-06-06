<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> Uitlenen : </span>
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
          De uitleenperiode bedraagt maximaal 3 weken, gerekend vanaf de dag van
          lenen. Mocht het einde van de uitleenperiode vallen in een
          sluitingsperiode van de speelotheek (bijvoorbeeld vanwege vakantie)
          dan wordt de uiterste terugbrengdatum automatisch aangepast.
        </p>
        <p>
          Bij elke uitlening krijg je een overzicht van wat je meeneemt.
          <br />Hierop staat ook de inleverdatum.
        </p>
        <p>Bij ons speelgoed zit ook een overzicht met wat er in zit.</p>
        <p>
          Wanneer je het speelgoed bij ons inlevert zullen wij dit natellen. Zo
          kunnen wij steeds garant staan voor volledig speelgoed dat opnieuw
          uitgeleend kan worden.
        </p>
        <p>
          Bij te laat inleveren of missende onderdelen, wordt een bijdrage
          gevraagd.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h4">Abonnementen :</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>Wij werken met 3 types abonnement :</p>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-left">Speelgoed per uitlening</th>
                <th class="text-left">Prijs per jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gewoon abonnement</td>
                <td>3 stuks</td>
                <td>€15</td>
              </tr>
              <tr>
                <td>XL-abonnement</td>
                <td>6 stuks</td>
                <td>€25</td>
              </tr>
              <tr>
                <td>Abonnement D-Kaart *</td>
                <td>3 stuks</td>
                <td>€5</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        * meer info op de site van <nuxt-link to="www.de-watertoren.be/"> Watertoren - Beerse</nuxt-link>
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
          De uitleenperiode kan 1 keer verlengd worden, onder de voorwaarde dat
          het betreffende spelmateriaal niet gereserveerd is door een andere
          ontlener.
        </p>
        <p>
          Verlengen kan tot sluitingstijd op je inleverdag. Dit kan telefonisch
          of via sms / Whatsapp.
          <br />Vermeld altijd zeker je naam en lidnummer !
        </p>
        <p>
          Verlengen via mail of facebook/messenger is momenteel nog niet
          mogelijk.
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