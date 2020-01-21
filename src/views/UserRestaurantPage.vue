<template>
    <div class="userRestaurantPage">
        
        <v-row class="mr-2" align="center" justify="center">
        
            <!-- ++++++++++++++++++++++++++++++++++navbar logout profile+++++++++++++++++++++++++++++++-->
            <v-row class="ml-12 pl-12" align="center" justify="space-between">
                <v-col cols="1">
                    <navBar/>
                </v-col>
                

                <v-col  cols="12" sm="3">
                    <v-img contain=true max-height="150px" src="../assets/2009-09-12-01-38-20400487_lo_01 .png" style="border: solid indigo ;border-radius: 12px"></v-img>
                    <!--Inject the restaurants owners restaurant logo-->

                </v-col>
                <v-col cols="12" sm="5" >
                </v-col>

                <v-col cols="7" sm="1" >
                    <perfil/>
                </v-col>
                <v-col cols="5" sm="2">
                    <logout/>
                </v-col>

            </v-row>
            <!--++++++++++++++++table and set up so it doesnt clip the table by the navbar++++++++++++++++++++++++++++++++ -->
            <v-row class="pl-12 ml-12">
                <v-col cols="12" >
                    <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="restaurants"
                    :single-select="singleSelect"
                    item-key="name"
                    show-select
                    class="elevation-1"
                    >

                    
                    </v-data-table>

                </v-col>
                
                <v-row align="start" justify="end">
       
                    <v-col sm="3">
                        <v-btn large rounded color="warning" dark>Mudar estado da Reserva</v-btn>
                        <!--Change the status trough a  modal component where you set accepted or not and other options -->
                    </v-col>
                </v-row>



            </v-row>
           





        </v-row>

        <footerVue/>


         
    
    </div>
</template>

<script>

    
    import NavBar from "@/components/navBar.vue";
    import footerVue from "@/components/footerVue.vue";
    import Logout from "@/components/logout.vue";
    import perfil from "@/components/perfil.vue";

export default {

    name:"userRestaurantPage",

    components:{
        
        NavBar,
        footerVue,    
        Logout,
        perfil
    },
    data () {
        
        return {
        singleSelect: false,
        selected: [],
        headers: [
            {
            text: 'Reservas',
            align: 'left',
            sortable: false,
            value: 'name',
            },
            { text: 'Nome', value: 'nameReservation' },
            { text: 'Data', value: 'date' },
            { text: 'Hora', value: 'hour' },
            { text: 'Numero de Pessoas', value: 'seats' },
            { text: 'Estado da Reserva', value: 'status' }
        ],
        restaurants: [],
        }
    },
    
    created(){
    this.restaurants  = this.$store.getters.getRestaurants 
    },
    }
</script>
