<template>
  <div class="restaurantPage">
    <v-row align="center" justify="center">
      <v-img src="../assets/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg" class="grey lighten-3" max-height="380px" gradient="to top right, rgba(100,115,201,.19), rgba(25,32,72,.5)">
        
        <!-- ++++++++++++++++++++++++++++++++++registration, logn, search bar componets+++++++++++++++++++++++++++++++-->
        <v-row align="start" justify="center">
          
          <v-col md="1">
            <navBar />
          </v-col>
          

          <v-col md="1" offset-sm="6">
            <registration />
          </v-col>
          <!--Login Button to pop up modal   !-->
          <v-col md="2">
            <login />
          </v-col>
          <!--Search Text Field   !-->
          <v-col md="2">
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
        <!--++++++++++++++++Information tittle, adress, and reservation button++++++++++++++++++++++++++++++++ -->
        <v-row class="pl-12 ml-12">

          <v-col class="text-left pl-4">
            <!--add a mustache data to identify the size-->
            <p id="header-text" class="display-4 font-weight-bold white--text" >Chimarão</p>
            <p id="header-text" class="headline font-weight-bold white--text" >Norteshopping, Porto, Portugal</p>


            <!--Make a conponent of this button-->
             <v-btn large rounded color="#f7c23e" dark v-on="on">Fazer Reserva</v-btn>
          </v-col>
          

        </v-row>
       </v-img>

    </v-row>

    <!-- ++++++++++++++++++++++++   RESTAURANT PAGE INFORMATION AND MAP   ++++++++++++++++++++++++++++-->
    <v-container>
      <v-row class="pl-9 ml-9 py-4" justify="center">
        <!--INformation collum-->
        <v-col cols="12" md="6" :style=checker class="text-left">

          <v-img contain=true max-height="150px" src="../assets/2009-09-12-01-38-20400487_lo_01 .png"></v-img>
          <br><br>
          <p class="headline font-weight-bold ">Informação</p><br>

          <p class="caption  font-weight-bold ">DESCRIÇÃO:</p><br>
          <p class="caption  font-weight-bold ">ESPLANADA:</p><br>
          <p class="caption  font-weight-bold ">ESTACIONAMENTO:</p><br>
          <p class="caption  font-weight-bold ">TEMPO MÉDIO DE ESPERA:</p><br>  

        </v-col>



        <!--Google Maps API box-->        
        <v-col cols="12" md="6" :style=checker>
          <p class="headline font-weight-bold ">Localização do restaurante</p><br>
          <!--temp place holder for the actually thing-->
          <div id="googleMap" style="width:100%;min-height:400px;border: solid red"></div>

        </v-col>

      </v-row>
    </v-container>


    <!-- ++++++++++++++++++++++++++++++ row card MENU +++++++++++++++++++++++++++++++++++++++++++++++-->
    <!-- make sure that from md to large it shows 3 cards; lower will only show a card-->
    <v-container >      
      <v-row class="pl-12 ml-12 py-2" justify="center" :style="checker">
        <v-col cols="12">
          <p class="headline font-weight-bold ">Pratos Recomendados</p><br>
        </v-col>        
      </v-row>

      <v-row class="pl-12 ml-12 py-4" justify="center" :style="checker">
        <v-card
          elevation="3"
          max-width="350"
          class="mx-auto"
        >

          <v-carousel hide-delimiters>
            <!--  v-carousell item base
            <v-carousel-item
            
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
            -->

            <v-carousel-item>
              


            </v-carousel-item>


          </v-carousel>

        </v-card>  



      </v-row>

      

    </v-container>


    <!-- +++++++++++++++++++++++++++++++++EVALUATION COMMNENTS SECTION+++++++++++++++++++++++++++++++ -->
      


    <footerVue />
  </div>
</template>
<!--google maps script-->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
<style>
#header-text{
  text-shadow: 2px 2px 3px black ;
}
</style>

<script>
import NavBar from "@/components/navBar.vue";
import footerVue from "@/components/footerVue.vue";
import registration from "@/components/registration.vue";
import login from "@/components/login.vue";

export default {
  name: "restaurantPage",
  components: {
    NavBar,
    footerVue,
    registration,
    login
  },
  data: () => ({
    checker:"border: solid red",

    
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
    
    
  }),
  methods:{
    // this is a place holder for google maps api
    myMap() {
      var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
 
    }
  }
   
};
</script>
