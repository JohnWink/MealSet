<template>
    <v-footer
        dark
        padless
    >
    
        <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        >
            <v-row
            class="mb-6"
            no-gutters  
            >
                <v-col :sm="1" outlined
      color="red"></v-col> <!-- back space for the navbar-->
                <v-col outlined
      color="blue" :sm="11" > <!--Will have another row with 3 colums-->
                    <v-card-text class="white--text pt-0">
                        dsadasdsadassssssssssssssssssssssssssssssssssssssssssssss  
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="white--text">
                        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                    </v-card-text>

                </v-col>
            </v-row>


        

           
        </v-card>
    </v-footer>
    
</template>


<script>
export default {
  name: "footerVue",
  
  data: () => ({
      
  })
}
</script>