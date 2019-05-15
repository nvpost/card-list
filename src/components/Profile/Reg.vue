<template>
  <form>
    <v-text-field
      v-model="name"
      label="Логин"
      required
    ></v-text-field>
    <v-text-field
      v-model="pass"
      type="password"
      label="Пароль"
      required
    ></v-text-field>
     <v-text-field
      v-model="pass"
      type="password"
      label="Повторить"
      required
    ></v-text-field>
    <v-btn @click="login()">ОК</v-btn>
  </form>
</template>


<script>

export default {
    data () {
      return {
        name: 'name',
        pass: 'pass',
        login: false
      }
    },
   

}
</script>