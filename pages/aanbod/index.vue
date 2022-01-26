<template>
  <v-container>
    <v-row>
      <v-col class="py-10">
        <h1 class="text-h3">
          <span class="spellebel-title"> Soorten speelgoed : </span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="cat in categories"
        :key="cat.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <nuxt-link
          :to="`/aanbod/${cat.slug}`"
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
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  data: () => ({
    categories: [
      {
        name: 'Beweging / Buiten (B)',
        slug: 'beweging-buiten',
        img: '/img/categories/buiten-small.jpg',
      },
      {
        name: 'Constructie (C)',
        slug: 'constructie',
        img: '/img/categories/constructie-small.jpg',
      },
      {
        name: 'Expressie (E)',
        slug: 'expressie',
        img: '/img/categories/constructie-small.jpg',
      },
      {
        name: 'Fantasie (F)',
        slug: 'fantasie',
        img: '/img/categories/constructie-small.jpg',
      },
      {
        name: 'Gezelschapspellen (G)',
        slug: 'gezelschapspellen',
        img: '/img/categories/constructie-small.jpg',
      },
      {
        name: 'Puzzels (P)',
        slug: 'puzzels',
        img: '/img/categories/constructie-small.jpg',
      },
      {
        name: 'Speciaal (S)',
        slug: 'speciaal',
        img: '/img/categories/constructie-small.jpg',
      },
      {
        name: 'Zintuiglijk (Z)',
        slug: 'zintuiglijk',
        img: '/img/categories/constructie-small.jpg',
      },
    ],
  }),

  head(): MetaInfo {
    return {
      title: 'Aanbod',
    }
  },
})
</script>

<style scoped>
.sb-cat-link:hover .sb-cat-label {
  /* lime lighten-1 */
  background-color: #d4e157 !important;
}
</style>
