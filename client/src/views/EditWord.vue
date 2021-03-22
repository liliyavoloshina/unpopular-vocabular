<template>
  <section class="section">

    <h1 class="title is-size-4">Edit </h1>
    <div class="columns">
      <div class="column">
        <submit-form :word="word" @createOrUpdate="createOrUpdate" />
      </div>
      <div class="column">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur esse asperiores aliquam et amet beatae
          error, deleniti blanditiis explicabo omnis libero cumque soluta, fuga reiciendis culpa possimus vero numquam
          sunt!</p>
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