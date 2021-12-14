<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title"> {{ categoryName }} </span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text to="/aanbod" exact>
          <v-icon left>{{ icons.arrowLeft }}</v-icon>
          Terug naar overzicht
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-body-1">
          Dit zijn maar enkele voorbeelden van ons aanbod. Kom zeker eens langs
          om alles te ontdekken!
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="prod in 10" :key="prod" cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/binnen.jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text to="/aanbod" exact>
          <v-icon left>{{ icons.arrowLeft }}</v-icon>
          Terug naar overzicht
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { CATEGORIES } from '../../constants/aanbod'
import { mdiArrowLeft } from '@mdi/js'

export default Vue.extend({
  data: () => ({
    categories: CATEGORIES,
    products: [
      {
        img: '/img/categories/alles.jpg',
      },
      {
        img: '/img/categories/buiten.jpg',
      },
      {
        img: '/img/categories/constructie.jpg',
      },
    ],
    icons: {
      arrowLeft: mdiArrowLeft,
    },
  }),

  computed: {
    categoryName() {
      const cat = this.categories.find(
        (c) => c.slug == this.$route.params.category
      )
      return cat ? cat.name : 'Onbekende categorie'
    },
  },
})
</script>
