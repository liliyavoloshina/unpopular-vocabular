<template>
  <form action="#" @submit.prevent="onSubmit">
    <b-field label="Unpopular:">
      <b-input v-model="word.unpopular" icon="gem" placeholder="Unpopular..." type="text" required validation-message="This field is required" />
    </b-field>

    <b-field label="Popular synonym:">
      <b-input v-model="word.popular" icon="fire-alt" placeholder="Popular..." type="text" required validation-message="This field is required" />
    </b-field>

    <b-field label="Description:">
      <b-input v-model="word.description" maxlength="200" type="textarea" />
    </b-field>

    <b-field label="Popularity:">
      <b-select v-model="word.popularity">
        <option value="high" selected>
          Very unpopular
        </option>
        <option value="low">
          Quite popular
        </option>
      </b-select>
    </b-field>

    <div class="buttons mt-5">
      <b-button type="is-primary" :disabled="!isValid" :loading="isLoading" native-type="submit">
        Submit
      </b-button>
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
      default() {
        return { popular: '', unpopular: '', description: '', popularity: 'low' }
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
      if (this.word.popular !== '' && this.word.unpopular !== '') {
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
        _id: this.word._id,
        popular: this.capitalizeFirstLetter(this.word.popular),
        unpopular: this.capitalizeFirstLetter(this.word.unpopular),
        description: this.capitalizeFirstLetter(this.word.description),
        popularity: this.word.popularity
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
.control::first-letter {
  text-transform: uppercase;
}
</style>
