<template>
  <div class="navBar">
    <!--++++++++++++++++++++++++++++++++++++Retracted NavBar+++++++++++++++++++++++++++++-->

    <v-navigation-drawer
      fixed
      height="100%"
      v-model="drawer"
      :mini-variant="mini"
      permanent
      color="#5C6BC0"
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item class="logoColor">
            <router-link to="/landingPage"> 
            <v-img
              max-height="49"
              max-width="49"
              position="center"
              src="../assets/icon_V2_logo2_white.png"
            ></v-img>
            </router-link>
          </v-list-item>
        </v-list>
      </template>

      <v-list>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-list-item link v-on="on">
              <v-list-item-icon>
                <router-link to="/restaurantList">
                  <v-icon>fas fa-store</v-icon>
                </router-link>
              </v-list-item-icon>

              <v-list-item-title>Restaurantes</v-list-item-title>
            </v-list-item>
          </template>
          <span>Restaurantes</span>
        </v-tooltip>

        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-list-item link v-on="on">
              <v-list-item-icon>
                <v-icon>fas fa-utensils</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pratos</v-list-item-title>
            </v-list-item>
          </template>
          <span>Pratos</span>
        </v-tooltip>

        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-list-item link v-on="on">
              <v-list-item-icon>
                <v-icon>fas fa-user-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Perfil</v-list-item-title>
            </v-list-item>
          </template>
          <span>Perfil</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: "navBar",

  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" }
    ],
    mini: true
  })
};
</script>

<style>
.logoColor {
  background-color: #f7c23e;
}
.navBar {
  top: 0px;
}
</style>