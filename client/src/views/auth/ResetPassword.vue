<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="column is-half is-offset-one-quarter">
          <form class="box" novalidate @submit.prevent="onReset">
            <h1 class="is-size-3 has-text-centered my-2">Reset your password</h1>
            <b-field
              label="New password"
              :type="{ 'is-danger': $v.password.$error }"
              :message="{
                'Password is required': !$v.password.required && $v.password.$error,
                'Password must have at least 6 letters': !$v.password.minLength && $v.password.$error
              }"
            >
              <b-input v-model.trim="$v.password.$model" icon="lock" placeholder="123456" type="password"></b-input>
            </b-field>

            <b-field
              label="Confirm your password"
              :type="{ 'is-danger': $v.repeatPassword.$error }"
              :message="{
                'Please repeat password': !$v.repeatPassword.required && $v.repeatPassword.$error,
                'Passwords must be identical': !$v.password.sameAsPassword && $v.repeatPassword.$error
              }"
            >
              <b-input v-model.trim="$v.repeatPassword.$model" icon="lock" placeholder="123456" type="password" password-reveal></b-input>
            </b-field>

            <div class="buttons is-flex-direction-column is-centered mt-5">
              <b-button type="is-primary" class="m-0" native-type="submit" :disabled="isLoading">Continue</b-button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <b-loading v-model="isLoading" :is-full-page="true"></b-loading>
  </section>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import { resetPassword } from '@/api/user'

export default {
  name: 'ResetPassword',
  data() {
    return {
      isLoading: false,
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    async onReset() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.isLoading = true

        try {
          await resetPassword({ newPassword: this.password, token: this.$route.params.token })

          this.$buefy.toast.open({
            message: `You've successfully changed your password!`,
            type: 'is-success'
          })

          setTimeout(() => this.$router.push({ name: 'Home' }), 2000)
        } catch (e) {
          this.isLoading = false
        }
      }
    }
  }
}
</script>
