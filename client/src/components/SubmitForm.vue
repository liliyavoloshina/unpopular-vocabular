<template>
  <form ref="form" @submit.prevent="onSubmit" action="#">
    <b-field label="Unpopular:">
      <p class="control">
        <span class="button is-static">
          <b-icon icon="gem" size="is-small" type="is-primary" />
        </span>
      </p>
      <b-input v-model="word.unpopular" placeholder="Unpopular..." type="text" required></b-input>
    </b-field>
    <b-field label="Popular synonym:">
      <p class="control">
        <span class="button is-static">
          <b-icon icon="fire-alt" size="is-small" type="is-danger" />
        </span>
      </p>
      <b-input v-model="word.popular" placeholder="Popular..." type="text" required></b-input>
    </b-field>

    <b-field label="Description:">
      <b-input v-model="word.description" maxlength="200" type="textarea"></b-input>
    </b-field>

    <b-field label="Rarity:">
      <b-select v-model="word.rarity">
        <option value="high" selected>Very rare</option>
        <option value="low">Not very rare</option>
      </b-select>
    </b-field>

    <div class="buttons mt-5">
      <b-button @click.prevent="onSubmit" type="is-primary" :disabled="!isValid" :loading="isLoading">Submit</b-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SubmitForm',
  props: {
    word: {
      type: Object,
      required: false,
      default: () => {
        return {
          popular: '',
          unpopular: '',
          description: '',
          rarity: 'high'
        }
      }
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    isValid() {
      if (this.word.english != '' && this.word.russian != '') {
        return true
      }
      return false
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    async onSubmit() {
      this.isLoading = true
      this.$emit('createOrUpdate', {
        popular: this.capitalizeFirstLetter(this.word.popular),
        unpopular: this.capitalizeFirstLetter(this.word.unpopular),
        description: this.capitalizeFirstLetter(this.word.description),
        rarity: this.word.rarity
      })
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss">
.input {
  text-transform: capitalize;
}
</style>