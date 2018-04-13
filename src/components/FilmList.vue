<template>
  <ul>
    <li v-for="(film, index) in films " :key="index">{{ film.title }} - {{ film.release_date }}</li>
  </ul>
</template>

<script>
const axios = require('axios')

export default {
  name: 'FilmList',
  props: ['filmUrls'],
  data () {
    return {
      films: []
    }
  },
  created () {
    this.getPlanets()
  },
  methods: {
    getPlanets () {
      this.filmUrls.forEach(url => {
        console.log(url)
        axios.get(url)
          .then(result => result.data)
          .then(result => {
            console.log(result)
            this.films.push(result)
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
