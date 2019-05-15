<template>
<v-container>
    <v-layout row>
      <v-flex xs12>
          <h1 color="primary">Входящие</h1>
            <profile v-if="!user.id"></profile>
            <authorized-user :user="user" v-else></authorized-user>
            <div :class="[dropDown?'cards_field':false]">
              <v-layout wrap>
                <v-flex  v-for="issue in inners" class="pa-2" :key="issue.id">
                  <cards :issue="issue"></cards>
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
export default {
  components:{
    Profile, AuthorizedUser, Cards
  },
  data(){
    return{
      dropDown:false
    }
  },
  computed: {
    user(){
      return this.$store.getters.getUser
    },
    inners(){
      return this.$store.getters.getInnerIssues
    }
    
  },

}
</script>

<style>
  .cards_field{
    position: fixed;
    bottom: 50px;
    height: 100px;
  }
</style>