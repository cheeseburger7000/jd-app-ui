import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  // 同步 commit
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  // 异步 dispatch
  actions: {

  }
})
