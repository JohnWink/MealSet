<template>
   <div class="RestaurantList">
    <v-row align="center" justify="center">
     
        <v-row align="start" justify="center">
          <!--Registration Button to pop up modal   !-->
          <v-col md="1">
            <navBar/>
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
           <logout/>
          </v-col>
        </v-row>
    </v-row>

    <RecomendedCards />
    <footerVue/>
  </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import Logout from "@/components/logout.vue";
import RecomendedCards from "@/components/RecomendedCards.vue";

export default {
    components:{
        NavBar,
        Logout,
        RecomendedCards
    }
    

}
</script>

<style>

</style>