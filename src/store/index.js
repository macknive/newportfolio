import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: {
      status: false,
      error: null,
    },
  },
  getters: {
    getStatus(state) {
      return state.authenticated
    },
  },
  mutations: {
    getAuthenticated(state, value) {
      value == 'tesla' || value == 'supersecure'
        ? ((state.authenticated.error = false),
          (state.authenticated.status = true))
        : ((state.authenticated.error = true),
          (state.authenticated.status = false))
    },
  },

  actions: {},
  modules: {},
})
