<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <submit-form @createOrUpdate="createOrUpdate" />
      </div>
      <div class="column">
        <p class="is-size-5">You can add the unpopular word yourself. Just be sure it's <span class="has-text-danger has-text-weight-bold">really rare</span>.</p>

        <p class="is-size-5 mt-2">
          You can check this by finding out the position of the word in the frequency dictionary. The smaller it is, the more often this word occurs in various paper and electronic
          sources.
        </p>

        <p class="is-size-5 mt-2">For example, in <a href="https://wooordhunt.ru/">this</a> dictionary you can see this number.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { postWord } from '../api/words'
import SubmitForm from '../components/SubmitForm'

export default {
  name: 'NewWord',
  components: { SubmitForm },
  methods: {
    async createOrUpdate(word) {
      const response = await postWord(word)
      this.$buefy.toast.open({
        message: 'Word successfully created!',
        type: 'is-success'
      }),
        this.$router.push(`/words/${response._id}`)
    }
  }
}
</script>
