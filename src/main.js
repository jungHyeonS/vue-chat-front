import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
})
