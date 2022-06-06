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
        <h2 class="text-h4">Onze vrijwilligers</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>
          Wij noemen onze vrijwilligers SPULMERS.
          <br>Dit letterwoord komt van "SPeel-o-theekUitLeenMedewerkERS" 
        </p>
        <p>
          Enkele vrijwilligers uit ons spulmerteam staan elke zaterdagvoormiddag en elke woensdagnamiddag klaar, om jullie te ontvangen bij onze Speel-o-theek Spellebel. 
          Zijn er kinderen die uit ons groot assortiment niet kunnen kiezen, dan helpen onze spulmers hen heel graag verder. 
          Niet enkel kinderen, maar ook ouders, grootouders, leerkrachten, onthaalouders en andere organisaties zijn bij ons welkom.
        </p>
          Onze spulmers nemen het in te leveren speelgoed weer in ontvangst, dit wordt netjes nageteld en nadien weer op de juiste plaats in onze rekken geplaatst.
          Het nieuwgekozen speelgoed wordt door hen ook weer in onze computer ingevoerd. 
        <p>
          Tussendoor, en eigenlijk het meest belangrijke: een tasje koffie, thee of iets fris drinken en gewoon lekker bijkletsen. 
          Want voor dat sociaal contact en om er te zijn voor onze leden, zijn onze spulmers al jaren vrijwilliger bij onze Speel-o-theek.
        </p>
        <p>
          Wie al vaker bij ons is geweest, zal zien dat er regelmatig dezelfde teams van spulmers samen ingepland zijn. 
          Dit komt doordat wij zelf ons team mogen samenstellen. 
          Vaak zijn dat al kennissen, vrienden, of zelfs familie die elkaar goed aanvullen tot een top-team, 
          met allemaal hun eigen talenten en uiteraard een warm hart voor onze doelgroep.
        </p>
        <p>
          Onze vrijwilligers komen 2 keer per jaar samen om de agenda in te plannen. Wij kiezen dus zelf wanneer we komen spulmeren. 
          Daarbovenop is er jaarlijks een spulmeractiviteit waar al onze spulmers nog eens op een ludieke manier samenkomen, een hapje eten, drinken, 
          lachen en genieten van onze fijne teamsfeer.
        </p>
        <p>
          <v-img src="/img/groepsfoto_schapenhof.jpg" />
        </p>
        <p>
          Kom jij graag ons vrijwilligersteam versterken ?
          <br>Neem dan alvast een kijkje op <nuxt-link to="/spulmer-worden">deze (nog te maken) pagina</nuxt-link> !
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h4">Raad van Bestuur (RVB)</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>
          An, Gery, Hild, Ine, Mark, Monique, Ria, Sarah en Tine steken maandelijks de koppen bij elkaar om wat achter de schermen moet gebeuren in goede banen te leiden.  
          Zij vormen samen het bestuur van Spellebel. Zij waken over een breed en kwaliteitsvol aanbod van speelgoed en leggen contacten met de spulmers en met andere instanties.  
        </p>
        <p>
          De RVB ...
          <ul>
            <li>... stuurt !</li>
            <li>... filtert ideeën</li>
            <li>... werkt achter de schermen</li>
            <li>... regelt de administratie</li>
            <li>... zorgt voor de centen</li>
            <li>... lost problemen op waar die zich stellen</li>
            <li>... organiseert 2 x per jaar een algemene vergadering</li>
            <li>... zorgt ervoor dat Spellebel Spellebel kan zijn !</li>
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
      title: 'Wie zijn we?',
    }
  },
})
</script>