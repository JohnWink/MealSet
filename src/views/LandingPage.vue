
<template>

    <div class="LandingPage">
  
    <v-row align="center" justify="center">
      <v-img
      src="..\assets\landingPageImg.jpg"
      class="grey lighten-3"
      >
      <v-row
      align="start"
      justify="center"
      >
         <!--Registration Button to pop up modal   !-->
        <v-col  
          md="1"
          offset-sm="6">
          <v-btn
          large
           rounded color="#FFEB3B" 
           dark
           >
           Registar</v-btn>
        </v-col>
        <!--Login Button to pop up modal   !-->
        <v-col  
          md="2">
          <v-btn
          large
           rounded color="#5C6BC0" 
           dark
           >
           Iniciar Sessão</v-btn>
        </v-col>
        <!--Search Text Field   !-->
        <v-col  md="2">
          <v-text-field
            label="search"
            prepend-inner-icon="fas fa-search"
            height="2px"
            background-color= "#FFFFFF"
            filled
            rounded
            dense
          >
      
          </v-text-field>
        </v-col>
      </v-row>
       
      </v-img>
      
    </v-row>

    <div class="navBar">
      
      <v-navigation-drawer
      color="#5C6BC0"
      v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      permanent
      height="800"
      >
    <v-list-item>
          <v-list-item-title>NavBar Template</v-list-item-title>
  
          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

  </v-navigation-drawer>

    </div>
  </div>
</template>

<style>
.navBar{
  top: 0px;
  
}
</style>

<script>    

export default {
  name: "login",

  data: () => ({
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
     mini: true, 
    
  })
};

</script>