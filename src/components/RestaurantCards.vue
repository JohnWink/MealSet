<template>
  <div class="pl-12 ml-12 mr-2">
    <v-hover v-slot:default="{ hover }" open-delay="200">
        <router-link :to="{name:'restaurant', params:{id: restaurant.id}}">
        <v-card          
          class="mx-auto cards"
          max-height="500"
          max-width="500"
          :elevation="hover ? 16 : 2"
          :style="cardBorder"
        >
          <!--<v-img max-width =  "500px" max-height = "250px" :src="restaurant.coverImg"></v-img>-->
          <v-carousel
            cycle
            height="250"
            hide-delimiter-background
            hide-delimiters
            :show-arrows="false"
            :style="topCard"
          >
            <v-carousel-item
              v-for=" cyImg in restaurant.cycleImg"
              :key="cyImg"
              :src="cyImg"
              
            >
              
            </v-carousel-item>
          </v-carousel>

          <v-row class="mb-7 mx-2">
            <v-col cols="12" class="text-left">
              <v-title class=" font-weight-bold nameTitle" >{{ restaurant.name }}</v-title>

              <br> <i class="fas fa-edit mt-3"></i> {{restaurant.description}} 
              
              <!--
              <p class="ps">
                <i class="fas fa-map-marker-alt" ></i>
                {{distance}} de si 
                <br>
                <i class="fas fa-car"></i>
                {{travelDuration}}
              </p>
              -->
            </v-col>
            <v-col cols="12" class="text-left font-weight-bold" >
              <i class="fas fa-clock mt-3"></i> <span> {{restaurant.travelDuration}} </span>
              <br> <i class="fas fa-car mt-3"></i><span> {{Math.round(restaurant.distance/100)/10 + " km"}}</span>
            </v-col>
            <v-col class="text-right" >
              <p style="margin-right: 10px;" class="font-weight-bold">
                {{ restaurant.evaluation }}
                <v-icon medium color="yellow darken-1">fas fa-star</v-icon>
              </p>
            </v-col>
          </v-row>

        </v-card>

        
      </router-link>
    </v-hover>
  </div>
</template>

<style>

 a{
    text-decoration: none;
  }

.cards {
  border-radius: 20px;
}

/*#cardsImg {
  max-width: 500px;
  max-height: 250px;
}
*/

.nameTitle {
  font-size: 20px;
  margin-left: 3%;
  margin-top: 2%;
}

.title {
  font-size: 30px;
  margin-left: 3%;
}

.titles2 {
  font-size: 30px;
  margin-left: 3%;
  margin-top: 8%;
}

.ps {
  margin-left: 21px;
  font-size: 13px;
  margin-top: 1%;
}
</style>

<script>
export default {
  name: "RestaurantCards",

  props: ["restaurant"],
  
  data: () => ({
    
    distance:'',
    travelDuration:'',
    map:"",
    myPos:'',
    distanceValue:'',

    //style ajustments
    topCard: "border-bottom: 3px solid #5C6BC0",
    cardBorder: "border: 1.7px solid #5C6BC0;border-radius: 5px;"



    
    
 
  }),

  methods:{
    /*
     calcDistance(){
      
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      let restaurant = this.$store.getters.restaurantInfo(this.restaurant.id);
      let myPos = this.$store.getters.getLoggedUserLocation;
    
        const request = {
          origin: myPos,
          destination: restaurant.location,
          travelMode:google.maps.TravelMode["DRIVING"]
        }

        directionsService.route(request,(result,status)=>{

          if(status =='OK'){

            directionsRenderer.setDirections(result);
            
            const directionsData = result.routes[0].legs[0];

            if(directionsData){

              this.distance = directionsData.distance.text,
              this.travelDuration = directionsData.duration.text

              }else{
              alert('error on directions data')
            }

            
          }else{
            alert('Geocode was not successful for the following reason: ' + status);
          }
           
        })

        
    
  
    }
    */
    
  },

  mounted(){
    //this.calcDistance()
   
  },
  

};
</script>