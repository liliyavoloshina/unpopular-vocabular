<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="column is-half is-offset-one-quarter">
          <form class="box" novalidate @submit.prevent="onReset">
            <h1 class="is-size-3 has-text-centered my-2">Reset your password</h1>
            <p class="my-3">Enter the email address associated with your account and we'll send you a link to reset your password</p>
            <b-field
              label="Email"
              :type="{ 'is-danger': $v.email.$error }"
              :message="{ 'Email is required': !$v.email.required && $v.email.$error, 'Email format is invalid': !$v.email.email && $v.email.$error }"
            >
              <b-input v-model.trim="$v.email.$model" custom-class="is-lowercase" icon="envelope" type="email" placeholder="janedoe@gmail.com"></b-input>
            </b-field>

            <div class="buttons is-flex-direction-column is-centered mt-5">
              <b-button type="is-primary" class="m-0" native-type="submit" :disabled="isLoading">Continue</b-button>
              <router-link :to="{ name: 'Login' }" class="button is-ghost">Return to sign in</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <b-loading v-model="isLoading" :is-full-page="true"></b-loading>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { forgotPassword } from '@/api/auth'
import { EMAIL_TYPES } from '../../helpers/constants'

export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
      isLoading: false,
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  created() {
    this.email = this.$route.params.email
  },
  methods: {
    async onReset() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.isLoading = true

        try {
          await forgotPassword({ email: this.email })

          this.$router.push({
            name: 'EmailSent',
            params: {
              emailType: EMAIL_TYPES.FORGOT_PASSWORD
            }
          })
        } catch (e) {}

        this.isLoading = false
      }
    }
  }
}
</script>
