<template>
  <div class="container">
    <!-- Header Container-->
    <div class="hero is-light mb-2">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Hello World</h1>
          <h2 class="subtitle">{{ msg }}</h2>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <search-planet></search-planet>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4 is-primary">
        <div class="container">
          <h3>Olá</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPlanet from './SearchPlanet.vue'
export default {
  name: 'HomeMain',
  components: {SearchPlanet},
  data () {
    return {
      // msg: 'Encontre informações sobre os planetas dos filmes da franquia Star Wars'
      msg: 'Busca API externa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .mb-1{
    margin-bottom: 1rem !important;
  }
  .mb-2{
    margin-bottom: 2rem !important;
  }
  .mb-3{
    margin-bottom: 3rem !important;
  }
</style>
