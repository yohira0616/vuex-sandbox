import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: 'メッセージ'
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  getters: {
    message(state) {
      return state.message
    }
  },
  actions: {
    doUpdate({commit}, message) {
      commit('setMessage', {message})
    }
  }
})
export default store
