<template>
  <div id="app">
    <the-navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/UI/TheNavbar'
export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style src="./assets/styles.scss" lang="scss"></style>