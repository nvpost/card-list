<template>
<v-container>
    <v-layout row>
      <v-flex xs12>
          <h1 color="primary">Входящие</h1>
            <profile v-if="!user"></profile>
            <authorized-user :user="user" v-else></authorized-user>
            <div v-if="getDropDown">
              <issue-list :issue="issue"></issue-list> 
            </div>
            <div :class="[getDropDown?'cards_field_dropdown':false]" class="cards_field">
              <v-layout wrap>
                <v-flex v-for="issue in inners" class="pa-2" :key="issue.issue_id" @click="dropDownIssues(issue)">
                  <cards :issue="issue" :type="'in'" :dropDown="getDropDown"></cards>
                </v-flex>
              </v-layout>
            </div>  
    </v-flex>
  </v-layout>
</v-container> 
</template>
<script>
import AuthorizedUser from './Profile/AuthorizedUser.vue'
import Profile from './Profile/Profile.vue'

import Cards from './Lists/Cards'
import IssueList from './Lists/IssueList'
export default {
  components:{
    Profile, AuthorizedUser, Cards, IssueList
  },
  data(){
    return{
      dropDown:this.getDropDown,
      issue_id:"",
      issue:''
    }
  },
  computed: {
    user(){
      return this.$store.getters.getUser
    },
    inners(){
      return this.$store.getters.getInnerIssues
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
  .cards_field_dropdown{
    position: fixed;
    bottom: 10px;
    height: 100px;
    transition: all 1s ease;

  }
  .cards_field{
    transition: all 1s ease;
  }
</style>