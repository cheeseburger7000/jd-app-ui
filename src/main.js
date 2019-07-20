import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setAxios from './set-axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

setAxios()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
