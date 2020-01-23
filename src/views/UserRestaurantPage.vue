<template>
    <div class="userRestaurantPage">
        
        <v-row class="mr-2 mb-6 mt-6" align="center" justify="center">
        
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
                    :items="reservations"
                    :single-select="singleSelect"
                    item-key="name"
                    show-select
                    class="elevation-1"
                    >

                    
                    </v-data-table>

                </v-col>
                
                
                <v-row class="mr-6"  align="center" justify="end">
                   <!--need to figure out how to bind selected items-->
                    <ChangeStatusRes  />

                </v-row>
                

            </v-row >

            

        </v-row>

        <footerVue/>


         
    
    </div>
</template>

<script>

    
    import NavBar from "@/components/navBar.vue";
    import footerVue from "@/components/footerVue.vue";
    import Logout from "@/components/logout.vue";
    import perfil from "@/components/perfil.vue";
    import ChangeStatusRes from "@/components/ChangeStatusRervation.vue"

export default {

    name:"userRestaurantPage",

    components:{
        
        NavBar,
        footerVue,    
        Logout,
        perfil,
        ChangeStatusRes
    },
    data () {
        
        return {
            
        singleSelect: true,
        selected: [],
        statusStr: "",
        headers: [
            
            { text: 'Nome', value: 'name' },
            { text: 'Data', value: 'mealDate' },
            { text: 'Hora', value: 'mealTime' },
            { text: 'Numero de Pessoas', value: 'peopleNumber' },
            { text: 'Estado da Reserva', value: '' },
            
        ],
        reservations: [],
        
        editedIndex: -1,
        editedItem: {
            nameReservation: '',
            date: 0,
            hour: 0,
            seats: 0,
            status: '',
            },

        }
      
    },
    
    created(){
    this.reservations  = this.$store.getters.getReservations 
    },

    methods:{
        statusRead(){
            let statusStr = ""
            if(this.reservations.status == true){
                this.statusStr = "Reserva Comfirmada";
                return this.statusstr
                
            }
            else{
                this.statusStr = "A ser Comfirmado...";
                return statusstr
            }
        }
    }


}
</script>
