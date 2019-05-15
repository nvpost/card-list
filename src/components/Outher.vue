
<template>
<v-container>
    <v-layout row>
      <v-flex xs12>
          <h1 color="primary">Исходящие</h1>
            <profile v-if="!user.id"></profile>
            <authorized-user :user="user" v-else></authorized-user>
            <v-layout wrap>
              <v-flex xs4 v-for="issue in outhers" class="pa-2" :key="issue.id">
                <cards 
                :issue="issue"
                  >

                </cards>
              </v-flex>
            </v-layout>  
            <add-issue></add-issue>
    </v-flex>
  </v-layout>
</v-container>      
</template>



<script>
import AddIssue from './AddIssue'
import AuthorizedUser from './Profile/AuthorizedUser.vue'
import Profile from './Profile/Profile.vue'

import Cards from './Lists/Cards'

export default {
   components:{
     AddIssue, Profile, AuthorizedUser, Cards
   },
   computed: {
    user(){
      return this.$store.getters.getUser
    },
    outhers(){
      return this.$store.getters.getOutherIssues
    },
    
  },
  }
</script>
<style>
  
</style>