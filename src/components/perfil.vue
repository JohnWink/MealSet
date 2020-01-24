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
            <v-toolbar-title id="text">Perfil</v-toolbar-title>
          </v-col>
          <v-col class="text-right mt-2">
            <v-btn color="#ffffff" text right @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-container v-for="user in users" :key="user.id">
        <v-col class="text-center">
          <v-img :src="user.avatar"></v-img> 
          <v-title>Username: {{user.username}}</v-title>
          <p>Descrição: {{user.bio}}</p>
          <p>Password: {{user.password}}</p>
          <p>Email: {{user.email}}</p>
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
#text {
  color: white;
  text-shadow: 0px 0px 5px gray;
}
</style>


<script>
export default {
  name: "perfil",

  data: () => ({
    dialog: false,
    users: [
      {
        id: 1,
        username: "123",
        password: "123",
        email: "123@123.123",
        avatar: "https://i.imgur.com/6txmFi3.png",
        bio: "bnvgelfemkod", 
        admin: false,
        restaurantUser: false
      }
    ]
  }),

  methods: {}
};
</script>