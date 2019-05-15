import Vue from 'vue'
import './plugins/vuetify'
import * as fb from 'firebase/app'
//import Vuetify from 'vuetify'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router, store, fb,
  created() {
  if(localStorage.getItem('card-list-user')){
    this.$store.dispatch('autoLoginUser')
  }
  
  },
  render: h => h(App),
}).$mount('#app')
