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
      </div>
      <div class="column">
        <p>
          {{word.description}}
        </p>
      </div>
    </div>

    <div class="buttons">
      <router-link :to="{name: 'Edit', params: {id: this.$route.params.id}}">Edit Word</router-link>
    </div>
  </section>
</template>

<script>
import {getWord} from '../api/words'
export default {
  name: 'SingleWord',
  data() {
    return {
      word: ''
    }
  },
  async created() {
    this.word = await getWord(this.$route.params.id)
  }
}
</script>