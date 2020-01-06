<template>
      <div class="navBar">
      
      <v-navigation-drawer
      color="#5C6BC0"
      v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      permanent
      height="100%"
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
  
</template>

<script>
export default {
  name: "navBar",
  
  data: () => ({
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
     mini: true, 
    
  })
}
</script>

<style>
.navBar{
  top: 0px;
  
}
</style>