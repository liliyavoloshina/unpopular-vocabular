<template>
  <section class="hero is-fullheight is-light">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="box columns is-multiline is-centered">
          <div class="column is-full has-text-centered">
            <b-icon icon="paper-plane" size="is-large" style="fontSize: 56px;" type="is-info"></b-icon>
          </div>
          <div class="column is-full has-text-centered">
            <p class="is-size-4">{{ mainText }} Please check your inbox</p>
            <p v-if="emailType === EMAIL_TYPES.EMAIL_CONFIRMATION" class="is-size-5 mt-2 has-text-grey">
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
import { EMAIL_TYPES } from '../../helpers/constants'

export default {
  name: 'EmailSent',
  props: {
    emailType: {
      type: String,
      default: EMAIL_TYPES.EMAIL_CONFIRMATION
    }
  },
  data() {
    return {
      email: ''
    }
  },
  computed: {
    mainText() {
      if (this.emailType === EMAIL_TYPES.EMAIL_CONFIRMATION) {
        return `We've sent you a link to confirm your email address.`
      } else {
        return `Instructions for resetting your password were sent to your email.`
      }
    }
  },
  created() {
    this.EMAIL_TYPES = EMAIL_TYPES

    if (this.emailType === EMAIL_TYPES.EMAIL_CONFIRMATION) {
      this.email = getUser().email
    }
  }
}
</script>
