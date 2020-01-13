<template>
  <div class="guestPage">
    <v-row align="center" justify="center">
      <v-img src="../assets/landingPageImg.jpg" class="grey lighten-3">
        <v-row align="start" justify="center">

          <!-- ++++++++++++++++++++++++++++++++++Registration dialog box+++++++++++++++++++++++++++++++-->

          <v-col md="1" offset-sm="6">
            <registration />
          </v-col>
          <!--Login Button to pop up modal   !-->
          <v-col md="2">
            <login />
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <guestPageContent />
    <v-spacer></v-spacer>
    <footerVue />
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