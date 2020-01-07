<template>
  <v-footer
    dark
    color="indigo lighten-1"
    
    class="pl-12 ml-12"

  >
    <v-row
      justify="center"
      no-gutters
      
    >

    <!--add the footers info, logo, and links-->


    <!-- This text will serve has a guide to leght of the padding and margins-->
        <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

      
      
      <v-divider></v-divider>
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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