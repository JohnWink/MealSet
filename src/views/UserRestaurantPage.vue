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

            <!--reservation table-->
            <v-row class="pl-12 ml-12" v-if="this.tableMode == true">
                <v-col cols="12" >
                    <v-data-table
                    v-model="selected"
                    :headers="headersReservation"                    
                    :items="reservations"                    
                    :single-select="singleSelect"
                    item-key="id"
                    show-select
                    class="elevation-1"
                    >
                    <!--Condition to change status to a string and give color chips -->
                    <template v-slot:item.status="{ item }">
                        <v-chip :color="getColor(item.status)" dark> {{ getStatus(item.status) }}</v-chip>
                    </template>

                    
                    </v-data-table>

                </v-col>
                
                
                <v-row class="pl-6 ml-6 mr-6 mt-3"  align="center" justify="center" justify-sm="space-between">
                   <!--need to figure out how to bind selected items-->
                   <v-col cols="12" sm="2">
                       <v-btn v-on:click="tableMode = false" large rounded color="indigo lighten-1" class="white--text">Pratos</v-btn>
                   </v-col>

                   <v-col cols="12" sm="6">
                        <ChangeStatusRes v-if="this.selected.length!== 0" :selected="this.selected[0]" />
                        <v-btn v-else large rounded  disabled>Mudar estado da Reserva</v-btn>
                   </v-col>
                   

                </v-row>

            </v-row >

            <!--dishes table-->
            <v-row class="pl-12 ml-12" v-if="this.tableMode == false">
                <v-col cols="12" >
                    <v-data-table
                        v-model="selected"
                        :headers="headersDishes"                    
                        :items="dishes"                    
                        :single-select="singleSelect"
                        item-key="id"
                        show-select
                        class="elevation-1"
                    >

                    <!--add a v-slot item on img sence we will be sing new window link to imgur-->
                    </v-data-table>

                </v-col>
                
                
                <v-row class=" pl-6 ml-6 mr-6 mt-3"  align="center" justify="center" justify-sm="space-between">
                   <!--need to figure out how to bind selected items-->
                    <!--<ChangeStatusRes v-if="this.selected.length!== 0" :selected="this.selected[0]" />-->
                    
                    <v-col cols="12" sm="3">
                       <v-btn v-on:click="tableMode = true" large rounded color="indigo lighten-1" class="white--text">Reservas</v-btn>
                   </v-col>

                   <v-col cols="12" sm="4"> 
                       <v-btn  large rounded  >Adicionar prato</v-btn>
                   </v-col> 

                   <v-col cols="12" sm="4">
                       <v-btn v-if="this.selected.length!== 0" large rounded color="red lighten-1" class="white--text" @click="deleteItem()" >Remover prato</v-btn>
                       <v-btn v-else large rounded disabled>Remover prato</v-btn>
                   </v-col>
                   

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

            tableMode: true, // this will be the switch that allows it to change from reservation table to plate table  
            singleSelect: true,
            selected: [],
            restaurants: [],
            
            statusStr: "",
            headersReservation: [
                
                { text: 'Nome', value: 'name' },
                { text: 'Data', value: 'mealDate' },
                { text: 'Hora', value: 'mealTime' },
                { text: 'Numero de Pessoas', value: 'peopleNumber' },
                { text: 'Estado da Reserva', value:'status' },
                
            ],
            reservations: [],
            dishes: [],

            headersDishes: [
                
                { text: 'Prato', value: 'name' },
                { text: 'Imagem', value: 'img' },
                { text: 'Descrição', value: 'description' },
                { text: 'Avaliação', value: 'evaluation' },
                
                
            ],


        }
        
        
      
    },

    
    
    created(){
        this.reservations  = this.$store.getters.getRestaurantReservations
        this.dishes = this.$store.getters.getDishes    
    },

    

    methods:{
        getStatus(status){
            if(status == true){ return 'Reserva Comfirmada';}
            else{ return 'A ser Comfirmado...';}
        },
        getColor(status){
            if (status == false) return 'orange lighten-1'        
            else return 'green lighten-1'
        },

        // delete dish method
        deleteItem(){
            confirm('Tem acertza que deseja remover este prato?') &&
            this.$store.commit("REMOVE_DISH",{
            id: this.selected[0].id
          })
        }
    }


}
</script>
