<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title">Zintuiglijk (Z)</span>
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
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (1).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (2).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (3).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (4).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (5).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (6).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (7).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (8).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (9).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (10).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (11).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (12).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (13).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
      <!-- Start van een product -->
      <v-col cols="12" sm="4" md="3">
        <v-card>
          <v-img src="/img/aanbod-zintuiglijk/zintuiglijk (14).jpg" class="align-end" height="300px">
          </v-img>
        </v-card>
      </v-col>
      <!-- Einde van een product -->
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
import { MetaInfo } from 'vue-meta'
import { mdiArrowLeft } from '@mdi/js'

export default Vue.extend({
  data: () => ({
    icons: {
      arrowLeft: mdiArrowLeft,
    },
  }),

  head(): MetaInfo {
    return {
      title: 'Zintuiglijk',
    }
  },
})
</script>
