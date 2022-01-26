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
        <h2 class="text-h4">RVB</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>
          Tekst RVB (als die nodig is) ... 21u15
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h4">Vrijwilligers</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-body-1">
        <p>
          Aut quisquam veritatis id sint illo qui fuga adipisci eos molestiae
          culpa nam reprehenderit explicabo. In iste quas rem distinctio vero
          vel harum reiciendis vel fuga quaerat aut quia modi et itaque nostrum.
          Aut ipsa natus non dicta omnis et dolorem dolorem qui commodi enim ad
          nihil eius. Non aspernatur ut nostrum totam 33 pariatur internos et
          quam sint in voluptatem quia vel repudiandae facere? Et iste quas non
          asperiores omnis id iusto dolorem et repellat laudantium.
        </p>
        <p class="font-weight-bold text-center pt-5">
          Word jij ook graag spulmer?
          <nuxt-link to="/contact">Neem dan zeker contact op.</nuxt-link>
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