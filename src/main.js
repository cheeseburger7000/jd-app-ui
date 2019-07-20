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

// 路由守卫
router.beforeEach((to, from, next) => {
  // 刷新/路由跳转, 都需要访问路由前置钩子
  // 刷新会导致vuex中的数据丢失, 因此需要重新从localStorage获取token放入vuex
  store.commit('setToken', localStorage.getItem('token'))
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
