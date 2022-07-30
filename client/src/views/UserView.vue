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
      </div>
    </section>

    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
  </section>
</template>
<script>
import { getUser, updateUser } from '../api/user'

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
    }
  }
}
</script>
