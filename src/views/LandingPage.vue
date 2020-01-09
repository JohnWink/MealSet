
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
         <!-- ++++++++++++++++++++++++++++++++++Dialog box+++++++++++++++++++++++++++++++-->
    
        <v-col  
          md="1"
          offset-sm="6">
           <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn
          large
           rounded color="#FFEB3B" 
           dark
           v-on="on"
           >Registar</v-btn>
          </template>
          <v-card>
           
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
         </v-dialog>
          
        </v-col>
        <!--Login Button to pop up modal   !-->
        <v-col  
          md="2">
           <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn
            large
            rounded color="#5C6BC0" 
            dark
            v-on="on"
            >Iniciar Sessão</v-btn>
          </template>
          <v-card>
           
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
         </v-dialog>
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




    <footerVue/>

  </div>
  
  
</template>

<style>

</style>

<script>    

import NavBar from "@/components/navBar.vue";
import footerVue from "@/components/footerVue.vue";

export default {
  name: "landingPage",
  components: {
    NavBar,
    footerVue

  },
  data:() =>({
    dialog:false  
  })

};

</script>