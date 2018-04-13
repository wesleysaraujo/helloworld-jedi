<template>
  <div>
    <div class="card" v-if="planet">
      <div class="card-header">
        <div class="card-header-title card-header-centered has-text-centered">
          <span class="title">{{ planet.name }}</span>
        </div>
      </div>
      <div class="card-content">
        <ul>
          <li><strong>Popultion:</strong> {{ planet.population}}</li>
          <li><strong>Climate:</strong> {{ planet.climate}} </li>
          <li><strong>Terrain:</strong> {{ planet.terrain}} </li>
        </ul>
        <hr>
        <h4 class="subtitle  has-text-centered">Featured Films</h4>
        <film-list :film-urls="planet.films"></film-list>
      </div>
    </div>
    <div class="notification is-warning" v-else>
      <button class="delete"></button>
      Procure por um dos planetas na buca acima <b-icon icon="arrow-circle-up" size="is-small"></b-icon>!
    </div>
  </div>
</template>

<script>
import FilmList from './FilmList.vue'

export default {
  name: 'CardPlanet',
  components: {FilmList},
  props: ['planet']
}
</script>

<style lang="scss" scoped>
  .card-header-centered {
    display: block !important;
  }
</style>
