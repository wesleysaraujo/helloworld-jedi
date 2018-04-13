<template>
  <section>
    <b-field>
      <b-autocomplete
          rounded
          v-model="searchTerm"
          :data="filterDataPlanets"
          placeholder="exemp: Tatooine"
          icon="magnify"
          @select="option => selectedPlanet(option)">
          <template slot="empty">Nenhum  encontrado</template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script>
const axios = require('axios')

export default {
  name: 'SearchPlanet',
  data () {
    return {
      searchTerm: '',
      data: []
    }
  },
  computed: {
    filterDataPlanets () {
      this.searchPlanet()

      return this.data.map((planet) => {
        return planet.name
      })
    }
  },
  methods: {
    searchPlanet () {
      if (this.searchTerm !== '') {
        axios.get('https://swapi.co/api/planets', {
          params: {
            search: this.searchTerm
          }
        })
          .then(result => result.data)
          .then(result => {
            this.data = result.results
          })
      }
    },

    selectedPlanet (planet) {
      const planetChosen = this.data.filter(planetOption => {
        return planetOption.name === planet
      })

      this.$emit('planetChosen', {planets: planetChosen})
    }
  }
}
</script>
