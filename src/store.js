import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cartarry: [], // 购物车


  },
  // 同步 commit
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    toCart(state, tag) {
      let goods = state.cartarry.find(v => v.title == tag.label)
      if (goods) {
        goods.cartCount += 1
      } else {
        state.cartarry.push({title: tag.label, cartCount: 1})
      }
    },
    // 购物车数量+1
    cartAdd(state, index) {
      state.cartarry[index].cartCount++
    },
    // 购物车数量-1
    cartRemove(state, index) {
      if (state.cartarry[index].cartCount>1) {
        state.cartarry[index].cartCount--
      } else {
        if (window.confirm('确定从购物车移除该商品吗?')) {
          state.cartarry.splice(index, 1)
        }
      }
    },
    clearCart(state) {
      state.cartarry = []
    }
    

  },
  // 异步 dispatch
  actions: {

  },
  // getters相当于vue的computed
  getters: {
    countsum: state => {
      let num = 0
      state.cartarry.forEach(v => {
        num += v.cartCount
      })
      return num
    }
  }
})
