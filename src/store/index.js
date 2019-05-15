import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import issues from './issues'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user, issues
  },
  state:{
    loading: false,
    error: null
    },
    mutations: {
        setLoading (state, payload) {
          state.loading = payload
        },
        setError (state, payload) {
          state.error = payload
        },
        clearError (state) {
          state.error = null
        }
      },
      actions: {
        setLoading ({commit}, payload) {
          commit('setLoading', payload)
        },
        setError ({commit}, payload) {
          commit('setError', payload)
        },
        clearError ({commit}) {
          commit('clearError')
        }
      },
      getters: {
        loading (state) {
          return state.loading
        },
        error (state) {
          return state.error
        }
      } 
})
