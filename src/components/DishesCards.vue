<template>
  <div class="pl-12 ml-12 mr-2">
    <v-hover v-slot:default="{ hover }" open-delay="200">
      <v-card class="mx-auto cards" max-height="400" max-width="500" :elevation="hover ? 16 : 2" @click="showModal = true">
        
          <v-img class="cardsImg" :src="dish.img" ></v-img>
        
        <v-row class="mb-6 mx-2">
          <v-col class="text-left">
            <v-title class="ml-5 font-weight-bold nameTitle">{{ dish.name }}</v-title>
            <p class="ps">
              <i class="fas fa-tag"></i>
              {{dish.tag}}
              <br>
              <i class="fas fa-edit"></i>
              {{ dish.description }}
            </p>
          </v-col>
          <v-col class="text-right">
            <!--
            <p style="margin-right: 25px; margin-top: 15%" class="font-weight-bold">
              {{ dish.evaluation }}
              <v-icon medium color="yellow darken-1">fas fa-star</v-icon>
            </p>
            -->
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
    <v-dialog v-model="dialog" persistent max-width="400" v-if="showModal = true">
      <v-card>
        <!--Fechar-->
        <v-toolbar color="#5C6BC0">
          <v-row>
            <v-col class="text-left mt-2 ml-6">
              <v-toolbar-title id="text">Dish</v-toolbar-title>
            </v-col>
            <v-col class="text-right mt-2">
              <v-btn color="#ffffff" text right @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.cards {
  border-radius: 20px;
}

.cardsImg {
  max-width: 500px;
  max-height: 250px;
}

.nameTitle {
  font-size: 20px;
  margin-left: 3%;
  margin-top: 2%;
}

.ps {
  margin-left: 21px;
  font-size: 13px;
  margin-top: 1%;
}
</style>

<script>
export default {
  showModal: false,
  name: "DishesCards",
  props: ["dish"],
  data: () => ({
    checker: "border: solid red"
  })
};
</script>