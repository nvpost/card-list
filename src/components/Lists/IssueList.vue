<template>
<div>
    <v-layout row>
    <v-flex xs12 sm12>
      <v-card>
        <v-card-title><h4>{{issue.title}}</h4><v-spacer></v-spacer>{{issue.issue_date}}</v-card-title>
        <v-divider></v-divider>
        <div v-for="(i, index) in issue.issue_rows" :key="i.id">
        <v-list
          subheader
          two-line>
        
          <v-list-tile  @click="changeStat(index, i.id)"  :class="[i.stat=='1'?'green':false]">
            <v-list-tile-content>
              <v-list-tile-title>{{i.item}}</v-list-tile-title>
              <v-list-tile-sub-title>Дополнительное описание</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-spacer></v-spacer>
             <v-list-tile-content>
                {{i.amount}}
             </v-list-tile-content>
            <v-list-tile-action>
                <v-icon v-if="i.stat=='1'" size="30" color="white" width="30">check</v-icon>
                <!--<v-checkbox :v-model="parseInt(i.stat)"></v-checkbox>-->
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</div>
    
</template>

<script>
export default {
    props:[
        'issue'
    ],
    data(){
        return{
            stat: [],
        }
    },
    methods:{
        changeStat(i, i_id){
            if(this.issue.issue_rows[i].stat=='1'){
                this.issue.issue_rows[i].stat='0'
            }else{
                this.issue.issue_rows[i].stat='1'
            }
            this.$store.dispatch('newStat', {issue_id:this.issue.issue_id, row:i_id, val:this.issue.issue_rows[i].stat})
        }
    }
    
}
</script>
<style>
    .green{
        background-color:#00E676 !important;
    }
</style>
