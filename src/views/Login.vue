<template>
<div class="login">
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-tittle>
        <h1 class="display-1">Login</h1>
      </v-card-tittle>

      <v-card-text>
        <v-form>
          <v-text-field 
            label="Username"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password' " 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword =!showPassword"
            />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="yellow" to="/registration">Regist</v-btn> 
        
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
      <router-view/>
    </v-card>
  </v-app>
</div>
</template>

<script>    

export default {
  name: "login",

  data: () => ({
    showPassword : false
  })
};

</script>
