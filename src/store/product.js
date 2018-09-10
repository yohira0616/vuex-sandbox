import products from '@/api/products.js'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set(state, {detail}) {
      store.detail = detail
    },
    clear(state) {
      state.detail = {}
    }
  },
  actions: {
    load({commit}, id) {
      products.asyncFind(id, detail => {
        commit('set', {detail})
      })
    },
    destroy({commit}) {
      commit('clear')
    }
  }
})
