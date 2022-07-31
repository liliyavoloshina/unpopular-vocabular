<template>
  <b-navbar type="is-dark">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        <img src="/favicon.ico" alt="Lightweight UI components for Vue.js based on Bulma" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ name: 'Words' }" class="is-dark" exact>
        Words
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'NewWord' }" exact>
        New
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Test' }" exact>
        Test
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <b-dropdown v-if="isLoggedIn" position="is-bottom-left">
          <template #trigger>
            <b-button rounded class="navbar-item" role="button">
              <b-icon icon="user"></b-icon>
            </b-button>
          </template>

          <b-dropdown-item custom aria-role="menuitem">
            Logged as <b class="has-text-success">{{ userName }}</b>
          </b-dropdown-item>

          <hr class="dropdown-divider" />

          <b-dropdown-item has-link aria-role="menuitem">
            <router-link :to="{ name: 'User', params: { id: userId } }">
              <b-icon icon="wrench" class="mr-1"></b-icon>
              Profile
            </router-link>
          </b-dropdown-item>

          <hr class="dropdown-divider" />

          <b-dropdown-item value="logout" aria-role="menuitem" @click="logout">
            <b-icon icon="door-open" class="mr-1"></b-icon>
            Logout
          </b-dropdown-item>
        </b-dropdown>

        <div v-else class="buttons">
          <router-link :to="{ name: 'Signup' }" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link :to="{ name: 'Login' }" class="button is-light">
            Log in
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { clear, getUser } from '@/helpers/localStorage'
import { EventBus } from '@/helpers/helpers'

export default {
  name: 'TheNavbar',
  data() {
    return {
      user: null,
      EventBus
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.user
    },
    userName() {
      return this.user?.name
    },
    userId() {
      return this.user?.id
    }
  },
  created() {
    this.user = getUser()
    EventBus.$on('logout', () => {
      this.user = null
    })
  },
  methods: {
    logout() {
      this.user = null
      clear()
      if (this.$route.name !== 'Home') {
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
</script>
