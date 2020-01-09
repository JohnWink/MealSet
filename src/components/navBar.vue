<template>
  <div class="navBar">
    <!--++++++++++++++++++++++++++++++++++++Retracted NavBar+++++++++++++++++++++++++++++-->
    <v-navigation-drawer
      fixed
      height="100%"
      v-model="drawer"
      :mini-variant="mini"
      permanent
      color="#52688E"
    >
      <!--<v-btn width="100%" @click.stop="drawer = !drawer">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>-->
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <a href="" class="logoColor"> <v-img src="../assets/icon_V2_logo2_white.png"></v-img> </a>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-store</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Restaurantes</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-utensils</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Pratos</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-user-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--+++++++++++++++++++++++++++++++++++++++++++++Expanded NavBar++++++++++++++++++++++++++++++++++++++++++
    <v-navigation-drawer v-model="drawer" absolute bottom temporary color="#52688E">
      <v-btn width="100%" @click.stop="drawer = !drawer">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <template v-slot:prepend>
        <v-list>
          <v-list-item class="logoColor">
            <v-img
              max-height="49"
              max-width="49"
              position="center"
              src="../assets/icon_V2_logo2_white.png"
            ></v-img>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-store</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Restaurantes</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-utensils</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Pratos</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-user-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
-->
    <!--
       <v-navigation-drawer
        expand-on-hover
        fixed
        permanent
        height="100%"
        color ="#5C6BC0"
      >
        <template v-slot:prepend>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>
  
            <v-list-item
              link
              two-line
            >
              <v-list-item-content>
                <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </template>
  
        <v-divider></v-divider>
  
        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>fas fa-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Restaurantes</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>fas fa-utensils</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pratos</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>fas fa-user-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Perfil</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    -->
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