<template>
  <v-footer color="white" id="spellebel-footer">
    <v-container class="pt-16 pb-5">
      <v-row>
        <v-col>
          <nuxt-link to="/" nuxt>
            <v-img
              src="/img/logo-small.png"
              alt="Spellebel"
              width="100"
              height="100"
            />
          </nuxt-link>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <p>
                <a
                  class="text-decoration-none"
                  :href="`tel:${contact.phone_number}`"
                >
                  {{ contact.phone_number }}
                </a>
              </p>
              <p>
                <a
                  class="text-decoration-none"
                  :href="`mailto:${contact.email}`"
                  target="_blank"
                >
                  {{ contact.email }}
                </a>
              </p>
            </v-col>
            <v-col>
              <p>
                {{ contact.address.street }}
                {{ contact.address.number }}<br />
                {{ contact.address.postal_code }}
                {{ contact.address.city }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            &copy; {{ new Date().getFullYear() }} Spellebel - Made by
            <ExtLink to="https://jensw.be">Jensw.be</ExtLink>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style>
#spellebel-footer {
  border-top: 1px solid #e3e3e3 !important;
}
</style>

<script lang="ts">
import Vue from 'vue'
import { CONTACT } from '../constants/contact'

export default Vue.extend({
  name: 'Footer',

  data() {
    return {
      contact: CONTACT,
    }
  },
})
</script>