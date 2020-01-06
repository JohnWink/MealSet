
<template>

    <div class="LandingPage">
  
    <v-row align="center" justify="center">
      <v-img
      src="..\assets\landingPageImg.jpg"
      class="grey lighten-3"
      >
      <v-row
      align="start"
      justify="center"
      >
         <!--Registration Button to pop up modal   !-->
        <v-col  
          md="1"
          offset-sm="6">
          <v-btn
          large
           rounded color="#FFEB3B" 
           dark
           >
           Registar</v-btn>
        </v-col>
        <!--Login Button to pop up modal   !-->
        <v-col  
          md="2">
          <v-btn
          large
           rounded color="#5C6BC0" 
           dark
           >
           Iniciar Sessão</v-btn>
        </v-col>
        <!--Search Text Field   !-->
        <v-col  md="2">
          <v-text-field
            label="search"
            prepend-inner-icon="fas fa-search"
            height="2px"
            background-color= "#FFFFFF"
            filled
            rounded
            dense
          >
      
          </v-text-field>
        </v-col>
      </v-row>
       
      </v-img>
      
    </v-row>


    <navBar/>

    <footer/>

  </div>
  
  
</template>

<style>

</style>

<script>    

import NavBar from "@/components/navBar.vue";
import footer from "@/components/footer.vue";

export default {
  name: "landingPage",
  components: {
    NavBar,
    footer

  }

};

</script>