
<template>
  <div class="landingPage">
    <v-row align="center" justify="center">
      <v-img
        src="../assets/landingPageImg.jpg"
        class="grey lighten-3"
        max-height="300px"
        gradient="to top right, rgba(100,115,201,.19), rgba(25,32,72,.5)"
      >
        <!-- ++++++++++++++++++++++++++++++++++registration, logn, search bar componets+++++++++++++++++++++++++++++++-->
        <v-row align="start" justify="center">
          <v-col md="1">
            <navBar />
          </v-col>
          <!--Search Text Field   !-->
          <v-col md="2" offset-sm="7">
            <v-text-field
              prepend-inner-icon="fas fa-search"
              height="2px"
              background-color="#FFFFFF"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>

          <v-col md="2">
            <logout />
          </v-col>
        </v-row>
        <!--++++++++++++++++Information tittle, adress, and reservation button++++++++++++++++++++++++++++++++ -->
        <v-row class="pl-12 ml-12">
          <!--add a mustache data to identify the size-->
          <p
            id="header-text1"
            class="display-3 font-weight-bold white--text text-center"
          >Restaurantes</p>
        </v-row>
      </v-img>
    </v-row>
    <v-row class="pl-12 ml-12 mt-2">
      <v-col cols="10" sm="8">
        <v-textarea
          class="mx-2 mt-10"
          prepend-icon="fas fa-search"
          label="Pesquisa"
          rows="1"
          auto-grow
          clearable
          single-line
          color="#5C6BC0"
        ></v-textarea>
      </v-col>
      <v-col cols="10" sm="3">
        <v-overflow-btn class="mt-10 ml-4" color="#5C6BC0" block :items="filters" label="Filtros"></v-overflow-btn>
      </v-col>
    </v-row>
    <RestaurantCards />
    <footerVue />
  </div>
</template>

<style>
#header-text1 {
  text-shadow: 1px 1px 14px black;
  margin-left: 4%;
  margin-top: 5%;
}
</style>

<script>
import NavBar from "@/components/navBar.vue";
import footerVue from "@/components/footerVue.vue";
import RestaurantCards from "@/components/RestaurantCards.vue";
import Logout from "@/components/logout.vue";

export default {
  name: "landingPage",
  props: [],
  components: {
    NavBar,
    footerVue,
    RestaurantCards,
    Logout
  },
  data: () => ({
    filters: [
      "Mais Popular",
      "Mais Perto",
      "Peixe",
      "Carne",
      "Vegetariano"
    ]
  })
};
</script>