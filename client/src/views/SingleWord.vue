<template>
  <section class="section">

    <h1 class="title is-size-4">{{word.popular}} / {{word.unpopular}}</h1>
    <div class="columns">
      <div class="column">
        <b-field label="Unopular:">
          <p class="control">
            <span class="button is-static">
              <b-icon icon="gem" size="is-small" type="is-primary" />
            </span>
          </p>
          <b-input :value="word.unpopular" readonly></b-input>
        </b-field>
        <b-field label="Popular synonym:">
          <p class="control">
            <span class="button is-static">
              <b-icon icon="fire-alt" size="is-small" type="is-danger" />
            </span>
          </p>
          <b-input :value="word.popular" readonly></b-input>
        </b-field>

        <p :class="word.popularity === 'high' ? 'has-text-primary' : 'has-text-success'" class="has-text-weight-bold ">
          {{popularity}}</p>
      </div>
      <div class="column">
        <p>
          {{word.description}}
        </p>
      </div>
    </div>

    <div class="buttons">
      <b-button :to="{name: 'EditWord', params: {id: this.$route.params.id}}" tag="router-link" type="is-warning"
        icon-right="pen">Edit Word</b-button>
    </div>

    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </section>
</template>

<script>
import {getWord} from '../api/words'
export default {
  name: 'SingleWord',
  data() {
    return {
      word: '',
      isLoading: false
    }
  },
  computed: {
    popularity() {
      if (this.word.popularity === 'high') {
        return `This word is very unpopular!`
      } else {
        return `This word is quite popular...`
      }
    }
  },
  async created() {
    this.isLoading = true
    this.word = await getWord(this.$route.params.id)
    this.isLoading = false
  }
}
</script>