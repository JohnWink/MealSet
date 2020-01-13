 <template>

  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#f7c23e" dark v-on="on">Registar</v-btn>
    </template>
    <v-card>
      <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="username" :counter="20" :rules="nameRules" label="Username" required></v-text-field>

         <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Password" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
  
  
      <v-btn color="blue darken-1" text @click="dialog = false">Fechar Janela</v-btn>
 
      <v-btn color="primary" text @click="reset">Limpar Informação </v-btn>

        <v-btn color="primary" text @click="submit">Registar</v-btn>
     </v-form>
    </v-card>
  </v-dialog>
</template>

    <script>
        
        export default {
        name: "registration",
        
data: () => ({
  
    dialog: false,
    username: '',
    password:'',
    email:'',
    id:0,

    nameRules: [
      v => !!v || 'Por favor preencha o Username',
      v => (v && v.length <= 20) || 'Tem de ter menos de 20 caracteres',
    ],

    passwordRules:[
      password =>!!password || 'Por favor preencha a Password',
      password => (password.length >=6 || 'A password tem de ter no mínimo 6 caracteres'),
      password => (password.length <=20 || 'A password não pode ter mais que 20 caracteres'),
    ],

  
   
    emailRules: [
      v => !!v || 'Por favor introduza o seu email',
    ],
  
  }),
  

methods: {
    submit () {

      this.$store.commit("initializeStore")
      if (this.$refs.form.validate()) {

        this.dialog=false

        this.$store.commit("ADD_USER",{
        id: this.$store.getters.getLastUserId,
        username: this.username,
        password: this.password,
        email:this.email,
        });

        this.$router.replace("/")
        
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
        password:this.password,
        email: this.email,
        dialog: this.dialog
      }
    },
  }
};
</script>