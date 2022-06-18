<template>
  <v-container>
    <v-row class="py-10">
      <v-col>
        <h1 class="text-h3">
          <span class="spellebel-title">
            Wil je ook meewerken aan onze speel-o-theek ?
          </span>
        </h1>
      </v-col>
    </v-row>
    <v-row class="py-10">
      <v-col class="text-body-1" cols="12" lg="6">
        <p>
          Onze spulmers zeggen zelf dat dit de belangrijkste eigenschappen zijn
          van een goede spulmer ...
        </p>
        <p>
          <v-img max-width="750" src="/img/SPULMER-Kernwoorden.png"></v-img>
        </p>
        <p>Wil je eens komen proberen of heb je graag een woordje uitleg ?</p>
        <p>Vul dan even je gegevens in en wij nemen contact met je op !</p>
      </v-col>
      <v-col cols="12" lg="6">
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12" md="6" lg="12" xl="6">
                <v-text-field
                  v-model="become.firstName"
                  label="Voornaam"
                  required
                  :rules="[(value) => !!value || 'Dit veld is verplicht.']"
                  :disabled="awaitingAPIResponse"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="12" xl="6">
                <v-text-field
                  v-model="become.lastName"
                  label="Achternaam"
                  required
                  :rules="[(value) => !!value || 'Dit veld is verplicht.']"
                  :disabled="awaitingAPIResponse"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="12" xl="6">
                <v-text-field
                  v-model="become.phone"
                  type="tel"
                  label="Telefoonnummer"
                  :rules="[
                    () =>
                      !!become.email ||
                      !!become.phone ||
                      'Telefoonnummer en/of email is verplicht.',
                  ]"
                  :disabled="awaitingAPIResponse"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="12" xl="6">
                <v-text-field
                  v-model="become.email"
                  label="Email"
                  :rules="[
                    () =>
                      !!become.email ||
                      !!become.phone ||
                      'Telefoonnummer en/of email is verplicht.',
                  ]"
                  :disabled="awaitingAPIResponse"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn
                  color="primary"
                  block
                  @click="becomeSpulmer"
                  :loading="awaitingAPIResponse"
                >
                  Verzenden
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-alert type="success" v-show="emailSent">
                  We hebben jouw gegevens successvol ontvangen en nemen zo snel
                  mogelijk contact op.
                </v-alert>
                <v-alert type="error" v-if="emailFailed">
                  Er liep helaas iets mis bij het versturen van jouw gegevens.
                  Probeer later even opnieuw of neem rechtstreeks contact met
                  ons op.
                </v-alert>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  layout: 'no-footer',

  data() {
    return {
      become: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
      awaitingAPIResponse: false,
      emailSent: false,
      emailFailed: false,
    }
  },

  methods: {
    async becomeSpulmer() {
      let form = this.$refs.form as any
      if (form.validate()) {
        this.awaitingAPIResponse = true
        fetch('/api/become-spulmer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.become),
        })
          .then((r) => {
            if (!r.ok) {
              throw Error('Request returned non-2xx response')
            }
            form.reset()
            this.emailSent = true
            this.awaitingAPIResponse = false
          })
          .catch((e) => {
            this.emailFailed = true
            this.awaitingAPIResponse = false
          })
      }
    },
  },

  head(): MetaInfo {
    return {
      title: 'Hoe werkt het?',
    }
  },
})
</script>
