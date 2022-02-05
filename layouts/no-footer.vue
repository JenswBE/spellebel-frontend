<template>
  <v-app>
    <NavBar />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<style>
.spellebel-title {
  /* lime */
  border-bottom: 5px solid #cddc39;
}
</style>

<script lang="ts">
import NavBar from '../components/NavBar.vue'

export default {
  components: { NavBar },
}
</script>
