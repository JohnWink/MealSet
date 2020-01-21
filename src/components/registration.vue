 <template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#f7c23e" elevation="7" dark v-on="on">Registar</v-btn>
    </template>
    <!--MODAL DE REGISTO-->
    <v-card>
      <!--Fechar-->
      <v-toolbar color="#f7c23e">
        <v-row>
          <v-col class="text-left mt-2 ml-6">
            <v-toolbar-title id="text">Registo</v-toolbar-title>
          </v-col>
          <v-col class="text-right mt-2">
            <v-btn color="#ffffff" text right @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>

      <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <!--Username-->
        <v-text-field
          prepend-icon="fas fa-user-circle"
          v-model="username"
          :counter="20"
          :rules="nameRules"
          label="Username"
          required
          clearable
          color="#5C6BC0"
        ></v-text-field>

        <!--Email-->
        <v-text-field
          prepend-icon="fas fa-at"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          clearable
          color="#5C6BC0"
        ></v-text-field>

        <!--Password-->
        <v-text-field
          prepend-icon="fas fa-lock"
          v-model="password"
          :counter="20"
          :rules="passwordRules"
          label="Password"
          required
          clearable
          type="password"
          color="#5C6BC0"
        ></v-text-field>

        <!--Imagem de perfil-->
          <v-text-field
          prepend-icon="fas fa-link"
          v-model="userAvatar"
          label="Link de Avatar(opcional)"
          required
          clearable   
          color="#5C6BC0"
        ></v-text-field>
      </v-form>
      <!--Botões-->
      <v-card-actions>
        <v-col class="text-right mr-4 mb-4">
          <v-btn color="#f7c23e" dark @click="submit">Registar</v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
#text {
  color: white;
  text-shadow: 0px 0px 5px gray;
}
</style>

    <script>
export default {
  name: "registration",

  data: () => ({
    dialog: false,
    username: "",
    password: "",
    email: "",
    userAvatar:"",
    id: 0,
    restaurantUser: "",

    nameRules: [
      v => !!v || "Por favor preencha o Username",
      v => (v && v.length <= 20) || "Tem de ter menos de 20 caracteres"
    ],

    passwordRules: [
      password => !!password || "Por favor preencha a Password",
      password =>
        password.length >= 6 || "A password tem de ter no mínimo 6 caracteres",
      password =>
        password.length <= 20 ||
        "A password não pode ter mais que 20 caracteres"
    ],

    emailRules: [v => !!v || "Por favor introduza o seu email"]
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.dialog = false;

        if(this.userAvatar === ""){
          this.userAvatar = "https://i.imgur.com/6txmFi3.png"
        }
        this.$store.commit("ADD_USER", {
          id: this.$store.getters.getLastUserId,
          avatar : this.userAvatar,
          username: this.username,
          password: this.password,
          email: this.email
        });

        this.$router.replace("/");
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
        password: this.password,
        email: this.email,
        dialog: this.dialog
      };
    }
  }
};
</script>