<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="column is-half is-offset-one-quarter">
          Your email is successfully verifiyed
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { confirmEmail } from '@/api/user'
export default {
  name: 'ConfirmEmail',
  data() {
    return {
      isLoading: false
    }
  },
  async created() {
    this.isLoading = true

    try {
      const res = await confirmEmail(this.$route.params.confirmationToken)
      this.isLoading = false
      this.$buefy.toast.open({ duration: 5000, message: `Thanks, check your email for instructions to reset your password`, type: 'is-success' })

      setTimeout(() => this.$router.push({ name: 'Home' }), 5000)
    } catch (e) {}

    this.isLoading = false
  }
}
</script>
