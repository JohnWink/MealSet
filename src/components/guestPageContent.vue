<template>
  <div id="guestPageContent">
    <v-app class="pl-12 ml-12">
      <br />
      <br />
      <!--CONTENT GUEST PAGE-->
      <!--TITULOS-->
      <v-title class="text-center">Bem vindo ao MealSet!</v-title>
      <br />
      <v-title class="text-center">Começa já a utilizar a nossa aplicação:</v-title>
      <br />
      <!--CARDS-->
      <v-row class="mb-6" no-gutters v-for="n in 2" :key="n">
        <v-col cols="6" md="4" v-for="n in 3" :key="n">
          <v-card id="cards" class="mx-auto" elevation="10" height="300" max-width="400"></v-card>
        </v-col>
      </v-row>
    </v-app>

    <v-spacer></v-spacer>

    <!--ADDS-->
    <v-app id="bg" class="pl-12 ml-12">
      <v-title class="text-center" style="color: white;">hello world</v-title>
    </v-app>
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
  data: () => ({})
};
</script>