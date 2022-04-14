<template>
  <div class="base-wrapper">
    <the-navbar class="base-navbar" />
    <div class="container base-content">
      <router-view />
    </div>
    <the-footer class="base-footer" />
  </div>
</template>

<script>
import TheNavbar from '@/components/UI/TheNavbar'
import TheFooter from '@/components/UI/TheFooter'

export default {
  name: 'BaseLayout',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style src="@/assets/styles.scss" lang="scss"></style>

<style>
.base-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.base-navbar {
  flex: 0 0 auto;
}

.base-content {
  flex: 1 0 auto;
}

.base-footer {
  flex: 0 0 auto;
}
</style>
