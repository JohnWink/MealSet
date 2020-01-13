
<template>
  <div class="landingPage">
    <v-row align="center" justify="center">
      <v-img src="../assets/landingPageImg.jpg" class="grey lighten-3">
        <v-row align="start" justify="center">
          <!--Registration Button to pop up modal   !-->
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
        </v-row>
      </v-img>
    </v-row>

    <RecomendedCards />
    <footerVue />
  </div>
</template>

<style>
</style>

<script>
import NavBar from "@/components/navBar.vue";
import footerVue from "@/components/footerVue.vue";
import RecomendedCards from "@/components/RecomendedCards.vue";

export default {
  name: "landingPage",
  components: {
    NavBar,
    footerVue,
    RecomendedCards
  },
  data: () => ({})
};
</script>