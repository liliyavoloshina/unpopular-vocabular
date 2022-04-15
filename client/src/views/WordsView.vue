<template>
  <section class="section">
    <b-field v-if="words.length > 0">
      <b-input v-model="search" placeholder="Search..." type="search" icon-pack="fas" icon="search" />
    </b-field>
    <b-table v-if="filteredWords.length > 0" :data="filteredWords" :mobile-cards="true">
      <b-table-column v-slot="props" field="unpopular" label="Unpopular">
        {{ props.row.unpopular }}
      </b-table-column>

      <b-table-column v-slot="props" field="popular" label="Popular">
        {{ props.row.popular }}
      </b-table-column>

      <b-table-column v-slot="props" field="popularity" label="Popularity" centered>
        <b-icon v-if="props.row.popularity === 'high'" icon="gem" size="is-small" type="is-primary" />
        <b-icon v-else icon="fire-alt" size="is-small" type="is-danger" />
      </b-table-column>

      <b-table-column v-slot="props">
        <div class="buttons is-pulled-right">
          <b-button tag="router-link" :to="{ name: 'SingleWord', params: { id: props.row._id } }" type="is-primary" icon-right="info" size="is-small" />
          <b-button tag="router-link" :to="{ name: 'EditWord', params: { id: props.row._id } }" type="is-warning" icon-right="pen" size="is-small" />
          <b-button type="is-danger" icon-right="trash" size="is-small" @click="destroyWord(props.row._id)" />
        </div>
      </b-table-column>
    </b-table>
    <h1 v-if="!isLoading && filteredWords.length == 0" class="title is-size-5 mt-5 is-uppercase has-text-centered">
      Not a single word ...
    </h1>

    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
  </section>
</template>

<script>
import { getWords, deleteWord } from '../api/words'

export default {
  name: 'WordsView',
  data() {
    return {
      words: [],
      search: '',
      isLoading: false
    }
  },
  computed: {
    filteredWords() {
      const searchedWord = this.search.toLowerCase()
      return this.words.filter(oldWords =>
        Object.values(oldWords).some(newWords =>
          newWords
            .toString()
            .toLowerCase()
            .includes(searchedWord)
        )
      )
    }
  },
  async created() {
    this.isLoading = true
    try {
      this.words = await getWords()
    } catch (e) {
      console.log(e)
    }
    this.isLoading = false
  },
  methods: {
    destroyWord(id) {
      this.$buefy.dialog.confirm({
        title: 'Deleting word',
        message: 'Are you sure you want to <b>delete</b> this word? This action cannot be undone.',
        confirmText: 'Delete Word',
        type: 'is-danger',
        hasIcon: true,

        onConfirm: async () => {
          try {
            await deleteWord(id)
            const newWords = this.words.filter(word => word._id !== id)
            this.words = newWords
            this.$buefy.toast.open({
              message: 'Word successfully deleted!',
              type: 'is-success'
            })
          } catch (e) {}
        }
      })
    }
  }
}
</script>
