<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div v-if="isVerified" class="box columns is-multiline is-centered">
          <div class="column is-full has-text-centered">
            <b-icon icon="check-circle" size="is-large" style="fontSize: 56px;" type="is-success"></b-icon>
          </div>
          <div class="column is-full has-text-centered">
            <p class="is-size-4">Your email was successfully verified!</p>
            <p class="is-size-4">You can login and start use <span class="has-text-primary">Unpopular Vocabular</span> right away!</p>
            <div class="is-size-5 has-text-info loading-dots">Redirecting</div>
          </div>
        </div>

        <b-loading v-model="isLoading" :is-full-page="true"></b-loading>
      </div>
    </div>
  </section>
</template>

<script>
import { confirmEmail } from '@/api/auth'
export default {
  name: 'ConfirmEmail',
  data() {
    return {
      isLoading: false,
      isVerified: false
    }
  },
  async created() {
    this.isLoading = true

    try {
      await confirmEmail(this.$route.params.confirmationToken)
      this.isLoading = false
      this.isVerified = true
      setTimeout(() => this.$router.push({ name: 'Login' }), 5000)
    } catch (e) {
      this.$router.push({ name: 'Signup' })
    }

    this.isLoading = false
  }
}
</script>
