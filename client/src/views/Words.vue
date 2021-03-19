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
          <b-button type="is-primary" icon-right="info" />
          <b-button type="is-warning" icon-right="pen" />
          <b-button type="is-danger" icon-right="trash" />
        </div>

        {{props.row.author}}
      </b-table-column>

    </b-table>
  </section>
</template>

<script>
import {getWords} from '../api/words'
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
    this.words = await getWords()
    this.isLoading = false
  }
}
</script>