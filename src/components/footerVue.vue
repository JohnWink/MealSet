<template>
  <v-footer
    dark
    color="indigo lighten-1"
    
    class="pl-12 ml-12"

  >
    <v-row
      justify="space-between"
      align-content="center"
      
      no-gutters
      class="pl-4"
      

      
    >

    <!--add the footers info, logo, and links-->
    
    <v-col cols="2">
        Logo here
    </v-col>

    <v-col cols="2">
        Links here
    </v-col>

    <v-col cols="6">
        contacts here
    </v-col>

    <v-col cols="2">
        copyrights here   
    </v-col>
    
    


    
    </v-row>
  </v-footer>
</template>


<script>
export default {
  name: "footerVue",
  
  data: () => ({
      
  })
}
</script>