<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
             <v-btn
            large
            rounded color="#5C6BC0" 
            dark
            v-on="on"
            >Iniciar Sessão</v-btn>
          </template>
        <v-card>
           <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="username" :counter="20" :rules="nameRules" label="username" required></v-text-field>

        <v-text-field v-model="password" :rules="passwordRules" label="password" required></v-text-field>
  
  
      <v-btn color="blue darken-1" text @click="dialog = false">Fechar Janela</v-btn>
 
      <v-btn color="primary" text @click="reset">Limpar Informação </v-btn>

        <v-btn color="primary" text @click="submit">Logar</v-btn>
     </v-form>
          
          
            
        </v-card>
  </v-dialog>
        
    </template>

    <script>
        
        export default {
        name: "login",
        

    data: () => ({
     
    dialog: false,
    valid: true,
    username: '',
    password:'',
   
  }),


methods: {
    submit () {

      this.$store.commit("initializeStore")
      if (this.$refs.form.validate()) {

        this.dialog=false

        this.$store.commit("LOGIN",{
        username: this.username,
        password: this.password,
        });

        if(this.$store.getters.checkLogged === true){
          this.$router.replace('/landingPage')
        }
         
        
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
    form () {
      return {
        username:this.username,
        password:this.password,
        dialog:this.dialog
      
      }
    },
  }

        };
    </script>