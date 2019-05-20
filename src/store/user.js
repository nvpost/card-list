import * as fb from 'firebase/app'
require('firebase/auth')


class User {
    constructor (id, email) {
      this.email = email  
      this.id = id
    }
  }

export default{
    state:{
        user:null
        
    },
    mutations:{
        setUser(state, payload){
            state.user = payload
        }
    },
    actions:{
        async registerUser({commit}, {email, password}){
            commit('clearError')
            commit('setLoading', true)

            let body={login: email, pass: password}
            try {
                const user = await fetch("https://nv-dev.ru/application/card-list/registration.php", {
                    method: 'POST',
                    contentType: 'application/json',
                    body: JSON.stringify(body)
                })
                .then( res => {return res.json()})
                .then( data => {
                    console.log(data)
                    if(data.res==2){
                        commit('setError', "Пользователь уже существует")
                    }
                })
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async loginUser ({commit}, {email, password}) {
            commit('clearError')
            commit('setLoading', true)
            let body={login: email, pass: password}
            try {
                const user = await fetch("https://nv-dev.ru/application/card-list/login.php", {
                    method: 'POST',
                    contentType: 'application/json',
                    body: JSON.stringify(body)
                })
                .then( res => {return res.json()})
                .then( data => {
                    console.log(data)
                    if(data.res==4){
                        commit('setError', "Пароль не правильный")
                    }
                    else if(data.res==5){
                        commit('setError', "Пользователя не существует")
                    }
                    else{
                        localStorage.setItem('card-list-user', data.user)
                        localStorage.setItem('card-list-id', data.c_id)
                        commit('setUser', {id:data.c_id, login:data.user})
                        console.log('Устанавливаем пользователя')
                        this.dispatch('fetchIssues', this.getters.getUser)
                    }
                })
            } catch (error) {
              commit('setLoading', false)
              commit('setError', error.message)
              throw error
            }
          },
          autoLoginUser({commit}){
            commit('setUser', {id:localStorage.getItem('card-list-id'), login:localStorage.getItem('card-list-user')})
          },
          async logOutUser ({commit}) {
            commit('setUser', null)        
            localStorage.removeItem('card-list-user')
            localStorage.removeItem('card-list-id')
            commit('setState', {inners:[], outhers:[]})  
          },
    },
    getters:{
        getUser(state){
            return state.user
        }
    }
}