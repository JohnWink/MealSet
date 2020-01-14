<template>
  <div class="guestPage">
    <v-row align="center" justify="center">
      <v-img
        src="../assets/landingpage.png" 
      >
        <v-row align="start" justify="center">
          <!-- ++++++++++++++++++++++++++++++++++Registration dialog box+++++++++++++++++++++++++++++++-->

          <v-col md="1" offset-sm="6">
            <registration/>
          </v-col>
          <!--Login Button to pop up modal   !-->
          <v-col md="2">
            <login/>
          </v-col>
        </v-row>
        <v-row class="pl-12 ml-12">
          <v-col>
            <p
              style="margin-top: 15%"
              id="header-text"
              class="display-4 font-weight-bold black--text text-center"
            >Bem vindo ao MealSet!</p>
            <br>
            <p
              id="header-text"
              class="headline font-weight-bold black--text text-center"
            >Começa já a utilizar a nossa aplicação</p>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <guestPageContent/>
    <v-spacer></v-spacer>
    <footerVue/>
  </div>
</template>

<style>
</style>

<script>
import footerVue from "@/components/footerVue.vue";
import registration from "@/components/registration.vue";
import login from "@/components/login.vue";
import guestPageContent from "@/components/guestPageContent.vue";

export default {
  name: "guestPage",
  components: {
    footerVue,
    registration,
    login,
    guestPageContent
  },
  data: () => ({})
};
</script>