<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <submit-form :word="word" @createOrUpdate="createOrUpdate" />
      </div>
      <div class="column">
        <p class="is-size-5">You can add the unpopular word yourself. Just be sure it's <span
            class="has-text-danger has-text-weight-bold">really rare</span>. </p>

        <p class="is-size-5 mt-2"> You can check this by finding out the
          position of the word in the frequency dictionary. The smaller it is, the more often this word occurs in
          various paper and electronic sources.</p>

        <p class="is-size-5 mt-2">For example, in <a href="https://wooordhunt.ru/">this</a> dictionary you
          can see this number.</p>
      </div>
    </div>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </section>
</template>

<script>
import {putWord, getWord} from '../api/words'
import SubmitForm from '../components/SubmitForm'
export default {
  name: 'EditWord',
  components: {
    SubmitForm
  },
  data() {
    return {
      word: {},
      isLoading: false
    }
  },
  async created() {
    this.isLoading = true
    this.word = await getWord(this.$route.params.id)
    this.isLoading = false
  },
  methods: {
    async createOrUpdate(word) {
      await putWord(word)
      this.$buefy.toast.open({
        message: 'Word successfully edited!',
        type: 'is-success'
      }),
        this.$router.push(`/words/${word._id}`)
    }
  }
}
</script>