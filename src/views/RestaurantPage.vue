<template>
  <div class="restaurantPage">
    <v-row align="center" justify="center">
      <v-img src="../assets/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg" class="grey lighten-3" max-height="380px" gradient="to top right, rgba(100,115,201,.19), rgba(25,32,72,.5)">
        
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
             <logout/>
          </v-col>
        </v-row>
        <!--++++++++++++++++Information tittle, adress, and reservation button++++++++++++++++++++++++++++++++ -->
        <v-row class="pl-12 ml-12">

          <v-col class="text-left mx-4">
            <!--add a mustache data to identify the size-->
            <p id="header-text" class="font-weight-bold white--text" :style="fontsize">Chimarão</p>
            <p id="header-text" class="font-weight-bold white--text" style="font-size:135%">Norteshopping, Porto, Portugal</p>


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
        <v-col cols="12" md="6"  class="text-left">
          <v-card id="cards" elevation="5" class="pa-2">
            <v-img contain=true max-height="150px" src="../assets/2009-09-12-01-38-20400487_lo_01 .png"></v-img>
            <br><br>
            <p class="headline font-weight-bold ">Informação</p><br>

            <p class="caption  font-weight-bold ">DESCRIÇÃO:</p><br>
            <p class="caption  font-weight-bold ">ESPLANADA:</p><br>
            <p class="caption  font-weight-bold ">ESTACIONAMENTO:</p><br>
            <p class="caption  font-weight-bold ">TEMPO MÉDIO DE ESPERA:</p><br>
          </v-card>

            

        </v-col>



        <!--Google Maps API box-->        
        <v-col cols="12" md="6" >
          <p class="headline font-weight-bold ">Localização do restaurante</p><br>
          <!--temp place holder for the actually thing-->
          <div id="googleMap" style="width:100%;min-height:400px;border: solid red"></div>

        </v-col>

      </v-row>
    </v-container>


    <!-- ++++++++++++++++++++++++++++++ row card MENU +++++++++++++++++++++++++++++++++++++++++++++++-->
    <!-- make sure that from md to large it shows 3 cards; lower will only show a card-->
    <v-container >      
      <v-row class="pl-9 ml-9 py-2" justify="space-between" align="center" >
        <v-col cols="12" sm="5">
          <p class=" headline font-weight-bold " >Pratos Recomendados</p><br>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn large rounded color="#f7c23e" dark v-on="on">Mostrar Menu</v-btn>
        </v-col>    
      </v-row>

      <v-row class="pl-9 ml-9 py-6" justify="center" >
        <v-col cols="10" >          
          <RestaurantCards />      
        </v-col>    
      </v-row>

    </v-container>

<!-- +++++++++++++++++++++++++++++++++EVALUATION COMMNENTS SECTION+++++++++++++++++++++++++++++++ -->
    <v-container > 
      <!-- comment tittle and rading   ----rading needs to be calculated acording to the comments evaluation calculation  -->     
      <v-row class="pl-12 ml-12 py-2" justify="space-between" align="center" >
        <v-col cols="6" class="title" >
          <p>Avaliações do restaurante</p>
        </v-col>
        <v-col cols="3" class=" title font-weight-bold" >
          <v-icon medium color="yellow darken-1">fas fa-star</v-icon>
          3/5
        </v-col>  

      </v-row>
      <!-- comment evaluation component -->

      <v-row class="pl-12 ml-12 py-3" justify="start" align="center" >       
          
        <commentReview />    
           
      </v-row>

      <v-row class="pl-12 ml-12 py-3" justify="start" align="center" >
        <commentAdd />
      </v-row>
      


    </v-container>



    
      


    <footerVue />
  </div>
</template>
<!--google maps script-->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
<style>
#header-text{
  text-shadow: 2px 2px 3px black ;
}
#cards {
  border-radius: 20px;
}
</style>

<script>
//Import componets of the page
import NavBar from "@/components/navBar.vue";
import footerVue from "@/components/footerVue.vue";
import RestaurantCards from "@/components/restaurantPlateCard.vue"
import commentReview from "@/components/commentReview.vue"
import commentAdd from "@/components/commentADD.vue"
import Logout from "@/components/logout.vue";


export default {
  name: "restaurantPage",
  components: {
    NavBar,
    footerVue,
    Logout,
    RestaurantCards,
    commentReview,
    commentAdd
  },
  data: () => ({
    checker:"border: solid red",
    fontsize: " "
    
  }),
  methods:{
    // this is a place holder for google maps api
    myMap() {
      var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
 
    },
    //method to ajust the css font size for xs devices, handset
    mobileAjust(){
      let cssLine = "font-size:400%;"
      if(window.innerWidth < 600){
        
        cssLine += "font-size:280%;"
        
      }
      this.fontsize = cssLine;
    }
  },
  created() {
    window.addEventListener('resize', this.mobileAjust)
    this.mobileAjust();
  },
  destroyed() {
    window.removeEventListener('resize', this.mobileAjust)
  }
   
};
</script>
