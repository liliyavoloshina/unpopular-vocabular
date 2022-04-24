<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="column is-half is-offset-one-quarter">
          <form class="box" novalidate @submit.prevent="onSignup">
            <h1 class="is-size-3 has-text-centered my-2">Sign Up</h1>
            <b-field label="Name" :type="{ 'is-danger': $v.name.$error }" :message="{ 'Name is required': !$v.name.required && $v.name.$error }">
              <b-input v-model.trim="$v.name.$model" icon="user" type="email" placeholder="Jane"></b-input>
            </b-field>

            <b-field
              label="Email"
              :type="{ 'is-danger': $v.email.$error }"
              :message="{ 'Email is required': !$v.email.required && $v.email.$error, 'Email format is invalid': !$v.email.email && $v.email.$error }"
            >
              <b-input v-model.trim="$v.email.$model" icon="envelope" type="email" placeholder="janedoe@gmail.com"></b-input>
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

            <b-field
              label="Repeat password"
              :type="{ 'is-danger': $v.repeatPassword.$error }"
              :message="{
                'Please repeat password': !$v.repeatPassword.required && $v.repeatPassword.$error,
                'Passwords must be identical': !$v.password.sameAsPassword && $v.repeatPassword.$error
              }"
            >
              <b-input v-model.trim="$v.repeatPassword.$model" icon="lock" placeholder="123456" type="password" password-reveal></b-input>
            </b-field>

            <b-field
              :type="{ 'is-danger': $v.agreement.$error }"
              :message="{
                'Please agree': !$v.agreement.sameAs && $v.agreement.$error
              }"
            >
              <b-checkbox v-model="$v.agreement.$model">I agree to the <a href="#" class="is-underlined has-text-primary">terms and conditions</a></b-checkbox>
            </b-field>

            <div class="buttons is-flex-direction-column is-centered mt-5">
              <b-button type="is-primary" class="m-0" native-type="submit" :disabled="submitStatus === 'PENDING'">Signup</b-button>
              <router-link :to="{ name: 'Login' }" class="button is-ghost">Already registered?</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
import { signup } from '@/api/user'
import { setUser, setToken } from '@/helpers/localStorage'

export default {
  name: 'SignupView',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreement: true,
      isLoading: false,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    agreement: {
      required,
      sameAs: sameAs(() => true)
    }
  },
  methods: {
    async onSignup() {
      this.isLoading = true
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'

        try {
          const res = await signup({ name: this.name, email: this.email, password: this.password })
          setUser(res.user)
          setToken(res.token)

          if (redirectLink) {
            console.log(redirectLink, 'redirectLink!!!!!!!1')
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
