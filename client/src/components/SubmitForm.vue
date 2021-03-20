<template>
  <form ref="form" @submit.prevent="onSubmit" action="#">
    <b-field label="In English:">
      <p class="control">
        <span class="button is-static">
          <b-image :src="require('@/assets/images/uk.svg')" alt="English" class="icon-image"></b-image>
        </span>
      </p>
      <b-input v-model="word.english" validation-message="Enter a word in English!" pattern="[a-zA-Z]*"
        placeholder="In English..." type="text" required></b-input>
    </b-field>
    <b-field label="На русском:">
      <p class="control">
        <span class="button is-static">
          <b-image :src="require('@/assets/images/rus.svg')" alt="Русский" class="icon-image"></b-image>
        </span>
      </p>
      <b-input v-model="word.russian" validation-message="Введите слово на русском!" pattern="[а-яА-я]*"
        placeholder="На русском..." type="text" required></b-input>
    </b-field>

    <b-field label="Description:">
      <b-input v-model="word.description" maxlength="200" type="textarea"></b-input>
    </b-field>

    <b-field label="Rarity:">
      <b-select v-model="word.rarity">
        <option value="high">Very rare</option>
        <option value="low" selected>Not very rare</option>
      </b-select>
    </b-field>

    <div class="buttons">
      <b-button @click.prevent="onSubmit" type="is-primary" :disabled="!isValid" :loading="isLoading">Submit</b-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SubmitForm',
  props: {
    word: {
      type: Object,
      required: false,
      default: () => {
        return {
          english: '',
          russian: '',
          description: '',
          rarity: 'high'
        }
      }
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    isValid() {
      if (
        this.word.english != '' &&
        this.word.russian != '' &&
        /^[a-zA-Z]+$/.test(this.word.english) &&
        /^[а-яА-Я]+$/.test(this.word.russian)
      ) {
        return true
      }
      return false
    },
    valid() {
      return /^[а-я]+$/.test(this.word.russian)
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true
      this.$emit('createOrUpdate', this.word)
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-image {
  width: 30px;
  height: 30px;
}
</style>