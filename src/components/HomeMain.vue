<template>
  <div class="container">
    <!-- Header Container-->
    <div class="hero is-light mb-2">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Hello World Jedi</h1>
          <h2 class="subtitle">{{ msg }}</h2>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <nav class="panel has-white">
          <p class="panel-heading">
            Escolha um planeta
          </p>
          <div class="panel-block">
            <div class="control">
              <search-planet @planetChosen="handlePlanets"></search-planet>
            </div>
          </div>
          <div class="panel-block">
            <carousel class="full-carousel" :paginationEnabled="planets.lenght > 1" :perPage="1" :perPageCustom="[[768, 1], [1024, 1]]" >
              <slide class="full-slide" v-for="(planet, index) in planets" :key="index">
                  <card-planet :planet="planet"></card-planet>
              </slide>
            </carousel>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPlanet from './SearchPlanet.vue'
import CardPlanet from './CardPlanet.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'HomeMain',
  components: {SearchPlanet, CardPlanet, Carousel, Slide},
  data () {
    return {
      msg: 'Encontre informações sobre os planetas dos filmes da franquia Star Wars',
      planets: []
    }
  },
  methods: {
    handlePlanets (payload) {
      this.planets = payload.planets
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
  .full-carousel{
    width: 100%;
    .full-slide{
      padding: 5px;
    }
  }
</style>
