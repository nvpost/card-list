<template>

  <v-card
    class="vcard mx-auto elevation-3 "
    color="blue darken-1"
    dark
    max-height="300"
    :to="'/outher/'+issue.issue_id"
  >
    <v-card-title class="title">
        {{issue.title}}
    </v-card-title>

    <v-card-text class="text-truncate">
      <span v-for="item in issue.issue_rows" :key="item.id">
          {{item.item}} - {{item.amount}}, 
      </span>
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-content>{{issue.owner}}</v-list-tile-content>

        <v-layout
          align-center
          justify-end>
          <span class="body-1 mr-2">{{issue.issue_date}}</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>

</template>
<script>
export default {
   props:[
       'issue'
   ] 
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