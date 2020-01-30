<template>
  <v-dialog v-model="dialog" persistent max-width="400" max-height="600">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#f7c23e" elevation="7" dark v-on="on">Perfil</v-btn>
    </template>
    
    <!--MODAL DE PERFIL-->
    <v-card>
      <!--Fechar-->
      <v-toolbar color="#5C6BC0">
        <v-row>
          <v-col class="text-left mt-2 ml-6 title1">
            <v-toolbar-title >Perfil</v-toolbar-title>
          </v-col>
          <v-col class="text-right mt-2">
            <v-btn color="#ffffff" text right @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-form  ref="form" lazy-validation>
        <v-container class="text-center">
          
          <v-col align="center" justify="center">
            <v-img
              class="avatar"
              :src="oldAvatar "
              width="200px"
              height="200px"
            ></v-img>
          </v-col>
          <v-col class="text-left">
            <v-text-field
              label="Username"
              color="#5C6BC0"
              placeholder
              :value="this.$store.state.loggedUser[0].username"
              outlined
              disabled
            ></v-text-field>
            <v-text-field
              label="Email"
              color="#5C6BC0"
              placeholder
              v-model="email"
              outlined
              :disabled="alter"
            ></v-text-field>
            <v-text-field
              label="Password Anterior"
              v-model="oldPassword"
              :rules="oldPasswordRules"
              color="#5C6BC0"
              placeholder="Password Anterior..."
              outlined
              :disabled="alter"
              type="password"
            ></v-text-field>
            <v-text-field
              label="Nova Password"
              v-model="newPassword"
              :rules="NewpasswordRules"
              color="#5C6BC0"
              placeholder="Nova Password.."
              outlined
              :disabled="alter"
              type="password"
            ></v-text-field>
            <v-text-field
              label="Novo Avatar"
              v-model="newAvatar"
              color="#5C6BC0"
              placeholder="Novo link.."
              outlined
              :disabled="alter"
            ></v-text-field>
            
          </v-col>
        </v-container>
        <!--Botões-->
        <v-card-actions class="text-right mr-3">
          <v-col >
            <v-btn color="#f7c23e" :disabled="alter" dark @click="submit">Guardar</v-btn>
            <br><br>
            <v-btn color="#5C6BC0" dark @click="alter=false">Alterar Informações</v-btn>          
          </v-col>         
          
        </v-card-actions>


      </v-form>
    </v-card>
  </v-dialog>
</template>


<style>
.title1 {
  color: white;
  text-shadow: 0px 0px 5px gray;
}

.text1 {
  color: black;
  font-weight: 500;
  margin-left: 15%;
}

.text2 {
  color: black;
  font-weight: 300;
}

.avatar {
  border-radius: 100%;
  margin-bottom: 5%;
}
</style>


<script>
export default {
  name: "perfil",

  data: () => ({
    dialog: false,
    //current logged user data info

    email:"",
    oldAvatar:"",
    oldPassword: "",
    newPassword: "",
    newAvatar: "",
    alter: true,

    //rules for old and newpassword, 

    NewpasswordRules: [
      password => !!password || "Por favor preencha a Password",
      password =>
        password.length >= 6 || "A password tem de ter no mínimo 6 caracteres",
      password =>
        password.length <= 20 ||
        "A password não pode ter mais que 20 caracteres"
    ],

    oldPasswordRules: [
      password => !!password || "Por favor preencha a Password",
      password =>
        password == this.$state.loggedUser[0].password || "Password incorrecta!"
    ]


  }),

  methods: {
    submit(){
      //aply the change of the information, in this case profle
      //first check if avatar are emphty , if emphty  it will send the old one

            
      if (this.$refs.form.validate()){

        
        if(this.newAvatar != ""){
          this.$store.commit("PROFILE_EDIT",{
            id:this.$store.state.loggedUser[0].id,
            email: this.email,
            password: this.newPassword,
            avatar: this.newAvatar
          })

        }
        else{
          this.$store.commit("PROFILE_EDIT",{
            id:this.$store.state.loggedUser[0].id,
            email: this.email,
            password: this.newPassword,
            avatar: this.$store.state.loggedUser[0].avatar
          })

        }


        ///update after the state storage commit
        this.email = this.$store.state.loggedUser[0].email
        this.oldAvatar = this.$store.state.loggedUser[0].avatar




        this.alter = true
      }
    },

    update(){
      this.email = this.$store.state.loggedUser[0].email
      this.oldAvatar = this.$store.state.loggedUser[0].avatar
    }
    
  },

  created() {
    this.update()
    
  }
};
</script>