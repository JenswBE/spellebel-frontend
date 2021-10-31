<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ categoryName }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="prod in products" :key="prod.img" cols="12" sm="4" md="3">
        <v-card>
          <v-img :src="prod.img" class="align-end" height="300px"> </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { CATEGORIES } from '../../constants/catalog'

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

<style scoped>
.sb-cat-link:hover .sb-cat-label {
  /* lime darken-1 */
  background-color: #d4e157 !important;
}
</style>
