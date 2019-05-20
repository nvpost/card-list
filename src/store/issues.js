import userStore from './user.js'

export default{
    state:{
        inners:[
        ],
        outhers:[]
        
    },
    mutations:{
        setState(state, payload){
            state.inners=payload.inners
            state.outhers=payload.outhers
        }

    },
    actions:{
        async fetchIssues({commit}, payload){
            console.log('startFetch')
            commit('clearError')
            commit('setLoading', true)
            try {
                const issue = await fetch("https://nv-dev.ru/application/card-list/get_issues.php", {
                    method: 'POST',
                    contentType: 'application/json',
                    body: JSON.stringify(payload)
                })
                .then( res => {return res.json()})
                .then( data => {
                    
                    commit('setState', data)
                    console.log('endFetch')
                    commit('setLoading', false)
                })
                
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
            
            //return 'fetch ok'
        },


        async sendIssue({commit}, payload){
            commit('clearError')
            commit('setLoading', true)          
            try {
                const issue = await fetch("https://nv-dev.ru/application/card-list/set_issue.php", {
                    method: 'POST',
                    contentType: 'application/json',
                    body: JSON.stringify(payload)
                })
                .then( res => {return res.json()})
                .then( data => {
                    //console.log(data)
                })
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
            return 'all ok'
        },
        async newStat({commit}, payload){
            commit('clearError')
            try {
                const new_stat = await fetch("https://nv-dev.ru/application/card-list/set_new_stat.php", {
                    method: 'POST',
                    contentType: 'application/json',
                    body: JSON.stringify(payload)
                })
                .then( res => {return res.json()})
                .then( data => {
                    //console.log(this.getters.getUser) 
                    //this.dispatch('fetchIssues', this.getters.getUser)
                })
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
        },
    },
    getters:{
        getOutherIssues(state){
            return state.outhers
        },
        getInnerIssues(state){
            return state.inners
        },
        getSt(state){
            return state
        },
    }

}