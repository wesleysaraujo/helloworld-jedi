import Vue from 'vue'
import Router from 'vue-router'
import HomeMain from '@/components/HomeMain'

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeMain',
      component: HomeMain
    }
  ]
})
