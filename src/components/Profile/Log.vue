<template>
  <form>
    <v-text-field
      v-model="user.email"
      label="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.password"
      type="password"
      label="Пароль"
      required
    ></v-text-field>

    <v-btn @click="appLogin()" v-if="logReg==1">Войти</v-btn>
    <v-btn @click="appReg()" v-if="logReg==2">Зарегистрироваться</v-btn>
  </form>
</template>


<script>

export default {
  props:['logReg'],
    data () {
      return {
        user:{
          email: 'email',
          password: '',
        },
        rePass: "",
        //TODO Добавить проверку сравнения пароля
        login: false
      }
    },
    methods:{
      appLogin(){
        this.$store.dispatch('loginUser', this.user)
      },
      appReg(){
        this.$store.dispatch('registerUser', this.user)

      }
    }
}
</script>