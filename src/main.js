import Vue from 'vue'
import Buefy from 'buefy'
import App from './App'
import router from './router'
import 'buefy/lib/buefy.css'

// Axios (HTTP Library)
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.config.productionTip = false

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
