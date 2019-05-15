        <template>
            <v-tabs
              color="white"
              slider-color="cyan lighten-1">
              <v-tab v-for="n in loginBlock" :key="n"> {{ n }} </v-tab>
              <v-tab-item v-for="n in 2" :key="n">
                <v-card flat>
                  <v-card-text >
                    <login :logReg="n"></login>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
        </template>
<script>
import Login from './Log.vue'
import Reg from './Reg.vue'
export default {
  
  components:{
    Login, Reg
  },
  data(){
    return{
      loginBlock:['Войти', 'Зарегистрироваться'],
    }
  },
}
</script>
