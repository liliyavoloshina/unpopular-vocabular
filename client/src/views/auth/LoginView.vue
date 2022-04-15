<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="column is-half is-offset-one-quarter">
          <form class="box" novalidate @submit.prevent="onLogin">
            <h1 class="is-size-3 has-text-centered my-2">Log in</h1>
            <b-field
              label="Email"
              :type="{ 'is-danger': $v.email.$error }"
              :message="{ 'Email is required': !$v.email.required && $v.email.$error, 'Email format is invalid': !$v.email.email && $v.email.$error }"
            >
              <b-input v-model.trim="$v.email.$model" custom-class="is-lowercase" icon="envelope" type="email" placeholder="janedoe@gmail.com"></b-input>
            </b-field>

            <b-field
              label="Password"
              :type="{ 'is-danger': $v.password.$error }"
              :message="{
                'Password is required': !$v.password.required && $v.password.$error,
                'Password must have at least 6 letters': !$v.password.minLength && $v.password.$error
              }"
            >
              <b-input v-model.trim="$v.password.$model" icon="lock" placeholder="123456" type="password"></b-input>
            </b-field>

            <div class="buttons is-flex-direction-column is-centered mt-5">
              <b-button type="is-primary" class="m-0" native-type="submit" :disabled="submitStatus === 'PENDING'">Login</b-button>
              <router-link :to="{ name: 'Signup' }" class="button is-ghost">Don't have an account?</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
import { signin } from '@/api/user'
import { setUser, setToken } from '@/helpers/localStorage'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    async onLogin() {
      this.isLoading = true
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'

        try {
          const res = await signin({ email: this.email, password: this.password })
          setUser(res.user)
          setToken(res.token)

          const redirectLink = this.$route.query.redirect

          if (redirectLink) {
            this.$router.push({ path: redirectLink })
          } else {
            this.$router.push({ name: 'Home' })
          }
        } catch (e) {}

        this.submitStatus = 'OK'
      }
    }
  }
}
</script>
