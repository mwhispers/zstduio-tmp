<template>
  <div id="app">
    <Header></Header>
    <AlgsListPage></AlgsListPage>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AlgsListPage from './views/AlgsListPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    AlgsListPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
