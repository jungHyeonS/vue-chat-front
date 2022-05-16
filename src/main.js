import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App)
})
