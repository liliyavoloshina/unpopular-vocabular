<template>
  <section class="section">

    <h1 class="title is-size-4">{{word.english}} / {{word.russian}}</h1>
    <div class="columns">
      <div class="column">
        <b-field label="In English:">
          <p class="control">
            <span class="button is-static">
              <b-image :src="require('@/assets/images/uk.svg')" alt="English" class="icon-image"></b-image>
            </span>
          </p>
          <b-input :value="word.english" readonly></b-input>
        </b-field>
        <b-field label="На русском:">
          <p class="control">
            <span class="button is-static">
              <b-image :src="require('@/assets/images/rus.svg')" alt="Русский" class="icon-image"></b-image>
            </span>
          </p>
          <b-input :value="word.russian" readonly></b-input>
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

<style lang="scss" scoped>
.icon-image {
  width: 30px;
  height: 30px;
}
</style>