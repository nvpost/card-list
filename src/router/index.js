import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Profile from '../components/Profile/Profile'
import Inner from '../components/Inner'
import Outher from '../components/Outher'
import Issue from '../components/Issue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    //base: process.env.BASE_URL,
    base:"/application/card-list/app/",

  routes: [
    {path:'./', name:'home', component: Home},
    {path:'/profile', name:'profile', component: Profile},
    {path:'/inner', name:'in', component: Inner},
    {path:'/outher', name:'out', component: Outher},
    {path:'/outher/:id', name:'issue', component: Issue, props: true },
  ]
})