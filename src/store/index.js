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
    error: null,
    dropDown: false
    },
    mutations: {
        setLoading (state, payload) {
          state.loading = payload
          console.log('loadingFalse payload: '+payload)
        },
        setError (state, payload) {
          state.error = payload
        },
        clearError (state) {
          state.error = null
        },
        setDropDown(state, payload){
          state.dropDown=payload
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
        },
        dropDown ({commit}, payload) {
          commit('setDropDown', payload)
        }
      },
      getters: {
        loading (state) {
          return state.loading
        },
        error (state) {
          return state.error
        },
        getDropDown(state){
          return state.dropDown
        },

      } 
})
