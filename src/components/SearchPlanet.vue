<template>
  <section>
    <input type="text" v-model.lazy="searchTerm">
    <!-- <b-field label="Encontre um planeta">
      <b-autocomplete
          rounded
          v-model.lazy="searchTerm"
          :data="filterDataPlanets"
          placeholder="exemp: Tatooine"
          icon="magnify"
          @select="option => planetChosen = option">
          <template slot="empty">Nenhum  encontrado</template>
      </b-autocomplete>
    </b-field> -->
  </section>
</template>

<script>
const axios = require('axios')

export default {
  name: 'SearchPlanet',
  data () {
    return {
      searchTerm: '',
      planetName: '',
      planetChosen: {},
      planets: [],
      data: []
    }
  },
  computed: {
    filterDataPlanets () {
      return this.data.map((planet) => {
        return planet.name
      })
    }
  },
  methods: {
  },
  watch: {
    searchTerm (value) {
      if (value !== '') {
        axios({
          method: 'GET',
          url: 'https://swapi.co/api/planets?search=' + value,
        })
          .then(result => {
            console.log(result)

            // this.planets = result.results
            // this.data = result.results
          })
      }
    }
  }
}
</script>
