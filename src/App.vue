<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  .mb-1{
    margin-bottom: 1rem !important;
  }
  .mb-2{
    margin-bottom: 2rem !important;
  }
  .mb-3{
    margin-bottom: 3rem !important;
  }
}
</style>
