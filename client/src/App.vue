<template>
  <div id="app" class="main">
    <the-navbar />
    <div class="container container-main">
      <router-view />
    </div>

    <footer class="footer has-background-dark">
      <div class="content has-text-centered">
        <p>
          UnpopularVocabular by <a class="has-text-pink" href="https://www.facebook.com/profile.php?id=100036259350594">Liliya Voloshina</a> <br />
          This project is open-source and for educational purposes only <br />
          Branch on GitHub: <a class="has-text-warning" href="https://github.com/liliyavoloshina/unpopular-vocabular">UnpopularVocabular</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import TheNavbar from './components/UI/TheNavbar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style src="./assets/styles.scss" lang="scss"></style>
