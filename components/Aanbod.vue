<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title" v-text="title"></span>
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
        <p class="text-body-1">
          Klik op de voorbeelden om de volledige foto te zien.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="6"
        sm="4"
        md="3"
        lg="2"
        v-for="(product, index) in products"
        :key="product"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            @click="
              lightbox.toggler = !lightbox.toggler
              lightbox.index = index
            "
            :elevation="hover ? 10 : 2"
          >
            <v-img
              :src="
                $img(product, { quality: 80 }, { preset: 'aanbodThumbnail' })
              "
              height="250px"
            >
            </v-img>
          </v-card>
        </v-hover>
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

    <div>
      <FsLightbox
        :toggler="lightbox.toggler"
        :sourceIndex="lightbox.index"
        :sources="lightboxImages"
      />
    </div>
  </v-container>
</template>

<script lang="ts">
import { mdiArrowLeft } from '@mdi/js'
import Vue, { PropOptions } from 'vue'
import FsLightbox from 'fslightbox-vue'

export default Vue.extend({
  name: 'Aanbod',

  components: { FsLightbox },

  props: {
    title: {
      type: String,
      required: true,
    } as PropOptions<string>,
    products: {
      type: Array,
      required: true,
    } as PropOptions<string[]>,
  },

  data: () => ({
    lightbox: {
      toggler: false,
      index: 0,
    },
    icons: {
      arrowLeft: mdiArrowLeft,
    },
  }),

  computed: {
    lightboxImages() {
      return this.products.map((i) =>
        this.$img(
          i,
          { quality: 80, fit: 'inside' },
          { preset: 'aanbodLightbox' }
        )
      )
    },
  },
})
</script>
