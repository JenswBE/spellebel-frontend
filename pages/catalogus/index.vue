<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Soorten speelgoed</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="cat in categories" :key="cat.title" cols="12" sm="6" md="4">
        <a
          :href="`/catalogus/${cat.slug}`"
          style="text-decoration: none"
          class="sb-cat-link"
        >
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 10 : 5">
              <v-img :src="cat.img" class="align-end" height="300px">
                <p class="mb-5">
                  <span
                    class="
                      py-2
                      px-5
                      rounded-r-lg
                      lime
                      black--text
                      text-h5
                      sb-cat-label
                    "
                  >
                    {{ cat.name }}
                  </span>
                </p>
              </v-img>
            </v-card>
          </v-hover>
        </a>
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
  }),
})
</script>

<style scoped>
.sb-cat-link:hover .sb-cat-label {
  /* lime darken-1 */
  background-color: #d4e157 !important;
}
</style>
