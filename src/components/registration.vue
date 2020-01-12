 <template>
  <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn
          large
           rounded color="#FFEB3B" 
           dark
           v-on="on"
           >Registar</v-btn>
          </template>
        <v-card>

     <v-form
      class="pa-10"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="username"
        :counter="10"
        :rules="nameRules"
        label="username"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
  
  
  
  
  
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
    valid: true,
    username: '',
    email:'',
    id:0,

    nameRules: [
      v => !!v || 'Por favor preencha o nome',
      v => (v && v.length <= 20) || 'Tem de ter menos de 20 caracteres',
      v =>(v && v.length >=6 || 'Tem de ter no mínimo 6 caracteres')
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
        email:this.email,
        });

        this.$router.replace("/")
        
      }
    },
    reset () {
      this.$refs.form.reset()
    },
   
  },

  computed: {
    form () {
      return {
      
        username: this.username,
        email: this.email,
        dialog: this.dialog
      }
    },
  }

        };
    </script>