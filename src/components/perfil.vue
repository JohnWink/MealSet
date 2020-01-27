<template>
  <v-dialog v-model="dialog" persistent max-width="600" max-height="600">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#5C6BC0" elevation="7" dark v-on="on">Perfil</v-btn>
    </template>
    <!--MODAL DE PERFIL-->
    <v-card>
      <!--Fechar-->
      <v-toolbar color="#5C6BC0">
        <v-row>
          <v-col class="text-left mt-2 ml-6">
            <v-toolbar-title id="title">Perfil</v-toolbar-title>
          </v-col>
          <v-col class="text-right mt-2">
            <v-btn color="#ffffff" text right @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-container>
        <v-col class="text-left mt-2 ml-6">
          <v-img id="avatar" :src="this.$store.state.loggedUser[0].avatar" width="200px" height="200px"></v-img>
          </v-col>
          <v-col class="text-left">
          <v-title id="text">
            Username:
            <span>{{this.$store.state.loggedUser[0].username}}</span>
          </v-title>
          
          <p id="text">
            Email:
            <span>{{this.$store.state.loggedUser[0].email}}</span>
          </p>
          <p id="text">
            Password:
            <span>{{this.$store.state.loggedUser[0].password}}</span>
          </p>
        </v-col>
      </v-container>
      <!--Botões-->
      <v-card-actions>
        <v-col class="text-right mr-3">
          <v-btn color="#5C6BC0" dark @click="submit">Alterar Informações</v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<style>
#title {
  color: white;
  text-shadow: 0px 0px 5px gray;
}
#text {
  color: black;
}
</style>


<script>
export default {
  name: "perfil",

  data: () => ({
    dialog: false
  }),

  methods: {},

  created(){
   
  }
};

</script>