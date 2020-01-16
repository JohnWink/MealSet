<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#5C6BC0" dark v-on="on">Iniciar Sessão</v-btn>
    </template>
    <v-card>
      <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="username" :rules="nameRules" label="username" required></v-text-field>

         <v-text-field v-model="password" :rules="passwordRules" label="password" required></v-text-field>
   
      <v-btn color="blue darken-1" text @click="dialog = false">Fechar Janela</v-btn>
 
      <v-btn color="primary" text @click="reset">Limpar Informação </v-btn>

      <v-btn color="primary" text @click="submit">Login</v-btn>
     </v-form>
    </v-card>
  </v-dialog>
</template>

    <script>
export default {
  name: "login",

  data: () => ({
    errorMessages: "",
    username: '',
    password:'',
    dialog: false,

    nameRules: [
      v => !!v || 'Por favor preencha o Username',
    ],

    passwordRules:[
      password =>!!password || 'Por favor preencha a Password',
    ],
  }),


methods: {
    submit () {

     
      if (this.$refs.form.validate()) {

        this.dialog=false

        this.$store.commit("LOGIN",{
        username: this.username,
        password: this.password,
        });

        if(this.$store.getters.checkLogged === true){
          // A bug happens in all the image renders in all the pages if this happens, maybe, ask the teacher. 
          this.$router.push({path:'/landingPage'})
        }
         
        
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
    form() {
      return {
        username: this.username,
        password:this.password

      };
    }
  }
};
</script>