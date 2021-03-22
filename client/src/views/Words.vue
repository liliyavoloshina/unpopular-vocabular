<template>
  <section class="section">
    <b-field v-if="words.length > 0">
      <b-input v-model="search" placeholder="Search..." type="search" icon-pack="fas" icon="search">
      </b-input>
    </b-field>
    <b-table v-if="filteredWords.length > 0" :data="filteredWords" :mobile-cards="true">

      <b-table-column field="unpopular" label="Unpopular" v-slot="props">
        {{ props.row.unpopular }}
      </b-table-column>

      <b-table-column field="popular" label="Popular" v-slot="props">
        {{ props.row.popular }}
      </b-table-column>

      <b-table-column field="popularity" label="Popularity" v-slot="props" centered>
        <b-icon v-if="props.row.popularity === 'high'" icon="gem" size="is-small" type="is-primary" />
        <b-icon v-else icon="fire-alt" size="is-small" type="is-danger" />
      </b-table-column>

      <b-table-column v-slot="props">
        <div class="buttons is-pulled-right">
          <b-button tag="router-link" :to="{name: 'SingleWord',  params: {id: props.row._id}}" type="is-primary"
            icon-right="info" size="is-small" />
          <b-button tag="router-link" :to="{name: 'EditWord',  params: {id: props.row._id}}" type="is-warning"
            icon-right="pen" size="is-small" />
          <b-button @click="destroyWord(props.row._id)" type="is-danger" icon-right="trash" size="is-small" />
        </div>
      </b-table-column>

    </b-table>
    <h1 v-if="!isLoading && filteredWords.length == 0" class="title is-size-5 mt-5 is-uppercase has-text-centered">Not a
      single
      word ...</h1>

    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </section>
</template>

<script>
import {getWords, deleteWord} from '../api/words'
export default {
  name: 'Words',
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
      return this.words.filter(oldWords => {
        return Object.values(oldWords).some(newWords =>
          newWords
            .toString()
            .toLowerCase()
            .includes(searchedWord)
        )
      })
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
        message:
          'Are you sure you want to <b>delete</b> this word? This action cannot be undone.',
        confirmText: 'Delete Word',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
          await deleteWord(id)
          const newWords = this.words.filter(word => word._id !== id)
          this.words = newWords
          this.$buefy.toast.open({
            message: 'Word successfully deleted!',
            type: 'is-success'
          })
        }
      })
    }
  }
}
</script>