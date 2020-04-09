import Vue from 'vue'
import App from './App.vue'

import JmUI from './index.js'
Vue.use(JmUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
