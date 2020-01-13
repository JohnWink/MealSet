<template>
  <div id="guestPageContent">
    <v-app class="pl-12 ml-12">
      <br>
      <br>
      <!--CONTENT GUEST PAGE-->
      <!--TITULOS-->
      <v-title class="text-center">Bem vindo ao MealSet!</v-title>
      <br>
      <v-title class="text-center">Começa já a utilizar a nossa aplicação:</v-title>
      <br>
      <!--CARDS-->
      <v-row class="mb-6">
        <v-col cols="6" md="4" v-for="card in cards" :key="card">
          <v-card id="cards" class="mx-auto" elevation="10" height="350" max-width="500">
            <v-title class="ml-5 font-weight-bold" id="titles">{{ card.title }}</v-title>
            <v-img position:center max-width="100%" max-height="100%" id="cardsImg" :src="card.img"></v-img>
            <br>
          </v-card>
        </v-col>
      </v-row>
      <v-img src="../assets/tlmv.png"></v-img>
    </v-app>
    <v-spacer></v-spacer>

    <!--ADDS-->
  </div>
</template>

<style>
#cards {
  border-radius: 20px;
}
#bg {
  background-color: black;
}
</style>

<script>
export default {
  name: "guestPageContent",
  data: () => ({
    cards: [
      {
        title: "1. Começa por te registar",
        img: require("@/assets/1.png")
      },
      {
        title: "2. Pesquisa",
        img: require("@/assets/2.png")
      },
      {
        title: "3. Faz reservas",
        img: require("@/assets/3.png")
      },
      {
        title: "4. Avalia as refeições",
        img: require("@/assets/4.png")
      },
      {
        title: "5. Sobre os restaurantes",
        img: require("@/assets/5.png")
      },
      {
        title: "6. Comenta sobre os restaurantes",
        img: require("@/assets/6.png")
      }
    ]
  })
};
</script>