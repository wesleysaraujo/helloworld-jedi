<template>
  <div>
    <div class="card" v-if="planet">
      <div class="card-header is-center">
        <h3 class="card-header-title">{{ planet.name }}</h3>
      </div>
      <div class="card-content">
        <ul>
          <li><strong>Popultion:</strong> {{ planet.population}}</li>
          <li><strong>Climate:</strong> {{ planet.climate}} </li>
          <li><strong>Terrain:</strong> {{ planet.terrain}} </li>
        </ul>
      </div>
    </div>
    <div class="notification is-warning" v-else>
      <button class="delete"></button>
      Procure por um dos planetas na buca acima <b-icon icon="arrow-circle-up" size="is-small"></b-icon>!
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPlanet',
  props: ['planet']
}
</script>
