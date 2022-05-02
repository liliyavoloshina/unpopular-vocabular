<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="box columns is-multiline is-centered">
          <div class="column is-full has-text-centered">
            <b-icon icon="paper-plane" size="is-large" style="fontSize: 56px;" type="is-info"></b-icon>
          </div>
          <div class="column is-full has-text-centered">
            <p class="is-size-4">We've sent you a link to confirm your email address. Please check your inbox</p>
            <p class="is-size-5 mt-2 has-text-grey">
              Is <span class="has-text-primary">{{ email }}</span> your correct email? If not,
              <router-link :to="{ name: 'Signup' }" class="is-underlined has-text-link">restart sign up proccess</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getUser } from '../../helpers/localStorage'
export default {
  name: 'WelcomeView',
  data() {
    return {
      email: ''
    }
  },
  created() {
    this.email = getUser().email
  }
}
</script>
