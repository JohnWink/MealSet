
<template>

    <div class="LandingPage">
  
    <v-row align="center" justify="center">
      <v-img
      src="../assets/landingPageImg.jpg"
      class="grey lighten-3"
      >
      <v-row
      align="start"
      justify="center"
      >
         <!--Registration Button to pop up modal   !-->
         <v-col md="1">
            <navBar/>
         </v-col>
         <!-- ++++++++++++++++++++++++++++++++++Registration dialog box+++++++++++++++++++++++++++++++-->
    
        <v-col   
          md="1"
          offset-sm="6">
          <p>{{$store.getters.userInfo}}</p>
           <registration/>
     
          
        </v-col>
        <!--Login Button to pop up modal   !-->
        <v-col  
          md="2">
          <login/>
        </v-col>
        <!--Search Text Field   !-->
        <v-col  md="2">
          <v-text-field
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




    <footerVue/>

  </div>
  
  
</template>

<style>

</style>

<script>    

import NavBar from "@/components/navBar.vue";
import footerVue from "@/components/footerVue.vue";
import registration from "@/components/registration.vue";
import login from "@/components/login.vue";

export default {
  name: "landingPage",
  components: {
    NavBar,
    footerVue,
    registration,
    login

  },
  data:() =>({
  
  })

};

</script>