
<template>
<v-container>
    <v-layout row>
      <v-flex xs12>
          <h1 color="primary">Исходящие</h1>
            <profile v-if="!user"></profile>
            <authorized-user :user="user" v-else></authorized-user>
            <div v-if="getDropDown">
              <issue-list :issue="issue"></issue-list> 
            </div>
            <div :class="[getDropDown?'cards_field_dropdown':false]" class="cards_field">
              <v-layout wrap>
                <v-flex v-for="issue in outhers" class="pa-2" :key="issue.issue_id" @click="dropDownIssues(issue)">
                  <cards :issue="issue" :type="'out'" :dropDown="getDropDown"></cards>
                </v-flex>
              </v-layout>
              <add-issue></add-issue>
            </div>  
    </v-flex>
  </v-layout>
</v-container>      
</template>



<script>
import AddIssue from './AddIssue'
import AuthorizedUser from './Profile/AuthorizedUser.vue'
import Profile from './Profile/Profile.vue'

import Cards from './Lists/Cards'
import IssueList from './Lists/IssueList'

export default {
  data(){
    return{
      issue:""
    }
  },
   components:{
     AddIssue, Profile, AuthorizedUser, Cards, IssueList
   },
   computed: {
    user(){
      return this.$store.getters.getUser
    },
    outhers(){
      return this.$store.getters.getOutherIssues
    },   
    getDropDown(){
      return this.$store.getters.getDropDown
    }
  },
  methods:{
    dropDownIssues(issue){

      if(!this.getDropDown){
        this.dropDown=!this.getDropDown
      }
      this.issue=issue
      this.$store.dispatch('dropDown', this.dropDown)
    }
  }
}
</script>
<style>
  
</style>