<template>
  <section class="section">
    <b-field label="Username">
      <b-input :value="updatedUser.name" @input="value => updateField('name', value)"></b-input>
    </b-field>

    <section class="section">
      <div class="buttons">
        <b-button type="is-success" expanded :disabled="hasChanges" @click="saveChanges">
          Save changes
        </b-button>
        <b-button type="is-danger" expanded @click="deleteAccount">
          Delete account
        </b-button>
      </div>
    </section>

    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
  </section>
</template>
<script>
import { deleteUser, getUser, updateUser } from '../api/user'
import { EventBus } from '../helpers/helpers'

export default {
  name: 'UserView',
  data() {
    return {
      user: {},
      updatedUser: {},
      isLoading: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    hasChanges() {
      return JSON.stringify(this.user) === JSON.stringify(this.updatedUser)
    }
  },
  async created() {
    this.isLoading = true

    const user = await getUser(this.id)
    this.setUser(user)

    this.isLoading = false
  },
  methods: {
    setUser(user) {
      this.user = { ...user }
      this.updatedUser = { ...user }
    },
    updateField(fieldName, value) {
      this.updatedUser[fieldName] = value
    },
    async saveChanges() {
      this.isLoading = true

      const updated = await updateUser({ id: this.id, ...this.updatedUser })
      this.setUser(updated)

      this.isLoading = false
    },
    deleteAccount() {
      this.$buefy.dialog.confirm({
        title: 'Deleting account',
        message: 'Are you sure you want to <b>delete</b> your account? This action cannot be undone.',
        confirmText: 'Delete Account',
        type: 'is-danger',
        hasIcon: true,

        onConfirm: async () => {
          try {
            this.isLoading = true

            await deleteUser(this.id)

            this.isLoading = false

            this.$buefy.toast.open({
              message: 'Account successfully deleted!',
              type: 'is-success'
            })

            EventBus.$emit('logout')
            clear()
            this.$router.push({ name: 'Home' })
          } catch (e) {}
        }
      })
    }
  }
}
</script>
