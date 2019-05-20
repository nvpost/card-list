<template>
  <v-app>
    
    <v-toolbar app >

      <v-toolbar-title class="headline text-uppercase">
        <v-toolbar-side-icon @click="diver=!diver"></v-toolbar-side-icon>
        <router-link to="/" tag="span" class="pointer">Списки</router-link>
        
        <!--<span class="font-weight-light">покупок</span>-->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(m, i) in menu" :key="i" 
          flat
          @click='goto(m.url)'
        >
            <v-badge left>
              <template v-slot:badge>
                <span v-if="!loading">{{m.url=='/inner'?inners:outhers}}</span>
                <span v-else>
                    <v-progress-circular
                      indeterminate
                      :size="15"
                      :width="3"
                      color="white"
                    ></v-progress-circular>
                </span>
              </template>
              
        <v-icon left>{{m.icon}}</v-icon>
            </v-badge>
          <span class="mr-2">{{m.text}}</span>
        </v-btn>
        <v-btn @click="logOut()" flat>
          <v-icon>exit_to_app </v-icon>
        </v-btn>
        
      </v-toolbar-items>
    </v-toolbar>
    

  <div v-if="!loading">
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>

  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            indeterminate
            :size="100"
            :width="6"
            color="blue darken-1"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>


<!--<diver v-if='diver' :menu="menu"></diver>-->
    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn flat dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import Diver from './components/Diver'

export default {
  name: 'App',
  components: {
    Diver
  },
  data () {
    return {
      diver: false,
      menu:[
        //{icon: 'face', text: 'Профиль', url:'/profile'},
        {icon: 'picture_in_picture_alt', text: 'Входящие', url:'/inner'},
        {icon: 'picture_in_picture', text: 'Исходящие', url:'/outher'},
      ],
      user:{}
    }
  },
  created(){
    this.user = this.$store.getters.getUser
    this.$store.dispatch('fetchIssues', this.user)
    
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    },
    inners(){
      return this.$store.getters.getInnerIssues.length
    },
    outhers(){
      return this.$store.getters.getOutherIssues.length
    },
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }, 
    logOut(){
      this.$store.dispatch('logOutUser')
      this.$router.push('/')
    },
    goto(gt){
      this.$store.dispatch('dropDown', false)
      this.$router.push(gt)
    },


  }   
}
</script>
<style>
  .pointer{
    cursor: pointer
  }
</style>