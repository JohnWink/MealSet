<template>
<div class="RestaurantManager">
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
    <p>{{selected}}</p>
</div>
</template>

<script>
export default {
data () {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Restaurantes',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Descrição', value: 'description' },
        { text: 'Tempo Médio de espera', value: 'mediumWaitingTime' },
        { text: 'Localização', value: 'location' },
        { text: 'Rating', value: 'evaluation' },
      ],
      restaurants: [],
    }
  },
  
  created(){
   this.restaurants  = this.$store.getters.getRestaurants
  },
}
</script>

<style>

</style>