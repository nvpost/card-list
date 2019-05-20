<template>
  <v-card
    class="vcard mx-auto elevation-3"
    :color="dropDown?'blue-grey darken-1':'blue darken-1'"
    dark
  >
    <v-card-title :class="[!dropDown?'title':'body-2']">
        {{issue.title}}
    </v-card-title>
    <v-card-text class="text-truncate" v-if="!dropDown">
      <span v-for="item in issue.issue_rows" :key="item.id">
          {{item.item}} - {{item.amount}}, 
      </span>
    </v-card-text>

    <v-card-actions v-if="!dropDown">
      <v-list-tile class="grow">
        <v-list-tile-content>{{type=='in'?'От: ':'Кому: '}} {{issue.owner}}</v-list-tile-content>
        <v-list-tile-content>{{сompleted}}</v-list-tile-content>

        <v-layout
          align-center
          justify-end>
          <span class="body-1 mr-2">{{getDate(issue.issue_date)}}</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>

</template>
<script>
export default {
   props:[
       'issue', 'dropDown', 'type'
   ],
   computed:{
     сompleted(){ //Получаем процент выполненых
       let comp=0
       this.issue.issue_rows.forEach(row => {
         if(row.stat!=="0"){
           comp++
         }  
       })
       let persent=(comp/this.issue.issue_rows.length).toFixed(2)*100
       return persent+"%"
     },
   }, 
   methods:{
     getDate(d){
       let dateArr= d.split(' ')[0].split('.')
       return dateArr[0]+"."+((dateArr[1].length<2)?('0'+dateArr[1]):dateArr[1])
       
     }
   } 
}
</script>
<style>
    .vcard{
        cursor: pointer;
        
    }
    .vcard:hover{
        background-color :#1565C0 !important;
    }
</style>