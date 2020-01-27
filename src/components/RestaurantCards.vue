<template>
  <div class="pl-12 ml-12 mr-2">
    <v-hover v-slot:default="{ hover }" open-delay="200">
      
        <v-card
          id="cards"
          class="mx-auto"
          max-height="350"
          max-width="500"
          :elevation="hover ? 16 : 2"
        ><router-link :to="{name:'restaurant', params:{id: restaurant.id}}">
          <v-img id="cardsImg" :src="restaurant.coverImg"></v-img></router-link>
          <v-row class="mb-6 mx-2">
            <v-col class="text-left">
              <v-title class="ml-5 font-weight-bold" id="nameTitle">{{ restaurant.name }}</v-title>
              <p id="ps">
                <i class="fas fa-map-marker-alt" color="yellow darken-1"></i>
                a {{ restaurant.distance }} Km de si
              </p>
            </v-col>
            <v-col class="text-right">
              <p style="margin-right: 25px;" class="font-weight-bold">
                {{ restaurant.evaluation }}
                <v-icon medium color="yellow darken-1">fas fa-star</v-icon>
              </p>
            </v-col>
          </v-row>
        </v-card>
      
    </v-hover>
  </div>
</template>

<style>
#cards {
  border-radius: 20px;
}

#cardsImg {
  max-width: 500px;
  max-height: 250px;
}

#nameTitle {
  font-size: 20px;
  margin-left: 3%;
  margin-top: 2%;
}

#title {
  font-size: 30px;
  margin-left: 3%;
}

#titles2 {
  font-size: 30px;
  margin-left: 3%;
  margin-top: 8%;
}
  
#ps {
  margin-left: 21px;
  font-size: 13px;
  margin-top: 1%;
}
</style>

<script>
export default {
  name: "RecomendedCards",
  props: ["restaurant"],
  data: () => ({
    checker: "border: solid red"
  })
};
</script>