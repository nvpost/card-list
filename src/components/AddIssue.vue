<template>
<div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="70%"
    >
      <template  v-slot:activator="{ on }">
        <v-btn
        fixed
        bottom
        right
        color="light-blue"
        dark
        fab 
        class="elevation-3"
        @click="openNewIssue()"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2" primary-title>
          <v-container  grid-list-md>
          <v-layout wrap>
            <v-flex sm4>
                <v-text-field v-model="listDesc.title" label="Заголовок"></v-text-field>
            </v-flex>
            <v-flex sm4>
              <!--<div class="desc_date">{{listDesc.date}}</div>-->
            </v-flex>
            <v-flex sm4>  
              <v-select
                  :items='executantList'
                  label="Для себя?"
                  v-model="listDesc.executant"
                  solo
                ></v-select>
            </v-flex>
          </v-layout>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-container  grid-list-md>
          <v-layout wrap>
            
          </v-layout>
           
          <v-layout wrap v-for="(l, index) in list" :key="index">

            <v-flex md1 sm1>
              {{index+1}}: 
            </v-flex>
            <v-flex md9 sm9>
              <v-text-field v-model="list[index].item" label="Что?"></v-text-field>
            </v-flex>
            <v-flex md2 sm2>
              <v-text-field v-model="list[index].amount" label="Сколько?"></v-text-field>
            </v-flex>
          </v-layout>
          </v-container>
          <v-card-actions>
                  <v-btn
                    absolute
                    right
                    color="light-blue"
                    dark
                    small 
                    class="elevation-3"
                    @click="addRow()">
              <v-icon>add</v-icon>
            </v-btn>
        </v-card-actions>
       </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="desc_date">{{listDesc.date}}</div>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="openConfirm()"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <confirm-dialog ref="confirm" :list="this.list" :desc="this.listDesc"></confirm-dialog>
  </div>
  
</template>

<script>
import ConfirmDialog from './Confirm'

export default {
   data () {
      return {
        dialog: false,
        confirm_dialog_trigger: false,
        executantList: [localStorage.getItem('card-list-user'), 'log3'],
        list:[
          {item:'Пиво', desc:'', amount:''}
        ],
        listDesc:{
          title:'Новый список',
          date: "",
          owner: localStorage.getItem('card-list-user'),
          executant: localStorage.getItem('card-list-user')
        }
      }
    },
    components:{
      ConfirmDialog
    },
      
    methods:{
      openNewIssue(){
        var now = new Date();
        var issueDate=now.getDate()+"."+(now.getMonth()+1)+"."+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()
        this.listDesc.date=issueDate
        this.dialog=true
      },
      addRow(){
        this.list.push({item:'', desc:'', amount:''})
      },
      openConfirm(){
        this.$refs.confirm.showConfirmDialog();
        
      }
    }
  }
</script>