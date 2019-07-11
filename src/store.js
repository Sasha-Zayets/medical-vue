import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    SET_LIST (state, payload) {
      state.list = payload
    }
  },
  actions: {
    addColumn ({commit}, payload) {
      commit('SET_LIST', payload)
    }
  }
})
