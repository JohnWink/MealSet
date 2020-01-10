 <template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#f7c23e" dark v-on="on">Registar</v-btn>
    </template>
    <v-card>
      <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="username" :counter="10" :rules="nameRules" label="username" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-btn color="blue darken-1" text @click="dialog = false">Fechar Janela</v-btn>

        <v-btn color="primary" text @click="reset">Limpar Informação</v-btn>

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
    name: "",
    nameRules: [
      v => !!v || "Por favor preencha o nome",
      v => (v && v.length <= 20) || "Tem de ter menos de 20 caracteres",
      v => (v && v.length >= 6) || "Tem de ter no mínimo 6 caracteres"
    ],
    username: "",
    email: "",
    emailRules: [v => !!v || "Por favor introduza o seu email"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
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
        email: this.email
      };
    }
  }
};
</script>