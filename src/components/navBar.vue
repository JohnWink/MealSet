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
              <v-img
                max-height="49"
                max-width="49"
                position="center"
                src="../assets/icon_V2_logo2_white.png"
              ></v-img>
          </v-list-item>
        </v-list>
      </template>

      <v-list>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-list-item link v-on="on">
              <v-list-item-icon>
                <router-link to="/landingPage">
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
                <router-link to="/DishesPage">
                  <v-icon>fas fa-utensils</v-icon>
                </router-link>
              </v-list-item-icon>

              <v-list-item-title>Pratos</v-list-item-title>
            </v-list-item>
          </template>
          <span>Pratos</span>
        </v-tooltip>

        <v-tooltip v-if="this.adminView == true" right>
          <template v-slot:activator="{ on }">
            <v-list-item link v-on="on">
              <v-list-item-icon>
                <router-link to="/restaurantManager">
                  <v-icon>fas fa-user-shield</v-icon>
                </router-link>
              </v-list-item-icon>
              <v-list-item-title>Manager de restaurantes</v-list-item-title>
            </v-list-item>
          </template>
          <span>Manager de restaurantes</span>
        </v-tooltip>

        <!--------UserRestanrant page-->
        <v-tooltip v-if="this.restauView == true"  right>
          <template v-slot:activator="{ on }">
            <v-list-item link v-on="on">
              <v-list-item-icon>
                
                <router-link to="/userRestaurantPage" >
                  <v-icon>fas fa-th-list</v-icon> 
                </router-link>
              </v-list-item-icon>
              <v-list-item-title>Manager de Reservas e Pratos</v-list-item-title>
            </v-list-item>
          </template>
          <span>Manager de Reservas e Pratos</span>
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
    mini: true,
    adminView: false ,
    restauView: false




  }),

  created(){
    this.adminView = this.$store.getters.getLoggedAdmin
    this.restauView = this.$store.getters.getLoggedUserRestaurantType
  }



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