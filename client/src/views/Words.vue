<template>
  <section>
    <b-table :data="words" :loading="isLoading" :mobile-cards="true">

      <b-table-column field="english" label="English" v-slot="props">
        {{ props.row.english }}
      </b-table-column>

      <b-table-column field="russian" label="Russian" v-slot="props">
        {{ props.row.russian }}
      </b-table-column>

      <b-table-column label="Rarity" v-slot="props">
        <span>
          <b-icon icon="percentage" :type="props.row.rarity === 'high' ? 'is-success' : 'is-danger'"></b-icon>
          {{ props.row.rarity }}
        </span>
      </b-table-column>

      <b-table-column field="author" v-slot="props">
        <div class="buttons is-pulled-right">
          <b-button tag="router-link" :to="{name: 'SingleWord',  params: {id: props.row._id}}" type="is-primary"
            icon-right="info" size="is-small" />
          <b-button type="is-warning" icon-right="pen" size="is-small" />
          <b-button @click="destroyWord(props.row._id)" type="is-danger" icon-right="trash" size="is-small" />
        </div>

        {{props.row.author}}
      </b-table-column>

    </b-table>
  </section>
</template>

<script>
import {getWords, deleteWord} from '../api/words'
export default {
  name: 'Words',
  data() {
    return {
      words: [],
      isLoading: false
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
    async destroyWord() {
      this.$buefy.dialog.confirm({
        title: 'Deleting account',
        message:
          'Are you sure you want to <b>delete</b> your account? This action cannot be undone.',
        confirmText: 'Delete Account',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: id => {
          deleteWord(id)
          this.$buefy.toast.open('Word deleted!')
        }
      })
    }
  }
}
</script>