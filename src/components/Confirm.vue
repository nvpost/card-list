<template>
  <v-layout row justify-center>
    
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Отправить список</v-card-title>

        <v-card-text>
          <p>{{desc.title}} от {{desc.date}}</p>
          <p>{{list.length}} позиций?</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="cancel()">
            Нет
          </v-btn>
          <v-btn color="green darken-1" flat="flat" @click="sendIssue()">
            Да
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    props:[
        'list', 'desc'
    ],

    data(){
        return{
            dialog: false
        }
    },
    methods: {
        showConfirmDialog(){
            this.dialog=true;
        },
        cancel(){
          this.dialog=false;  
        },
        sendIssue(){
            let issue={
                desc: this.desc,
                issues: this.list,  
            }
            this.$store.dispatch('sendIssue', issue)
            .then(res=>{
                this.dialog=false; 
                })

             
        }

    },
    
}
</script>