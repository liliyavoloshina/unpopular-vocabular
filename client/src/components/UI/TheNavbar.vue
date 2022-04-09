<template>
  <b-navbar centered type="is-dark">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }" exact>
        Unpopular Vocabular
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ name: 'Words' }" class="is-dark" exact>
        Words
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'NewWord' }" exact>
        New
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Test' }" exact>
        Test
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
