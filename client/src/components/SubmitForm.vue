<template>
  <form @submit.prevent="onSubmit" action="#">
    <b-field label="English:">
      <p class="control">
        <span class="button is-static"><b-icon icon="search"></b-icon></span>
      </p>
      <b-input placeholder="Search..." type="text" required validation-message="Only lowercase is allowed"
        pattern="[a-z]*">
      </b-input>
      
    </b-field>
  </form>
</template>
<script>
export default {
  name: 'SubmitForm',
  methods: {
    onSubmit() {
      console.log('work')
    }
  }
}
</script>