<template>
  <section class="section">
    <h1 class="title is-size-4">Add New Unpopular Word</h1>

    <div class="columns">
      <div class="column">
        <submit-form @createOrUpdate="createOrUpdate" />
      </div>
      <div class="column">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur esse asperiores aliquam et amet beatae
          error, deleniti blanditiis explicabo omnis libero cumque soluta, fuga reiciendis culpa possimus vero numquam
          sunt!</p>
      </div>
    </div>
  </section>
</template>

<script>
import {postWord} from '../api/words'
import SubmitForm from '../components/SubmitForm'
export default {
  components: {SubmitForm},
  name: 'NewWord',
  methods: {
    async createOrUpdate(word) {
      await postWord(word)
    }
  }
}
</script>