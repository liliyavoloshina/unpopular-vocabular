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

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
// font-family: 'Ranchers', cursive;

$family-primary: $family-monospace;
// $family-primary: $family-sans-serif;

$family-sans-serif: 'Ranchers', cursive;


// Set your colors
$primary: #8c67ef;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
	(
		'white': (
			$white,
			$black
		),
		'black': (
			$black,
			$white
		),
		'light': (
			$light,
			$light-invert
		),
		'dark': (
			$dark,
			$dark-invert
		),
		'primary': (
			$primary,
			$primary-invert,
			$primary-light,
			$primary-dark
		),
		'link': (
			$link,
			$link-invert,
			$link-light,
			$link-dark
		),
		'info': (
			$info,
			$info-invert,
			$info-light,
			$info-dark
		),
		'success': (
			$success,
			$success-invert,
			$success-light,
			$success-dark
		),
		'warning': (
			$warning,
			$warning-invert,
			$warning-light,
			$warning-dark
		),
		'danger': (
			$danger,
			$danger-invert,
			$danger-light,
			$danger-dark
		)
	),
	$custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';</style>