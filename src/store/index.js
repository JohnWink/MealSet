import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Array de users
    users:[],

  
  },

  getters: {
    
    //get last user Id in array
    getLastUserId: (state)=>{
      if (state.users.length) {
        return 1 + state.users[state.users.length-1].id;
      } else {
        return 0;
      }
    },
   
    userInfo: state => state.users,
  },
  
  mutations: {

   initializeStore(state){
    if(localStorage.getItem('users')){
      state.users = JSON.parse(localStorage.getItem("users"));
    }
    
   },
    
    ADD_USER(state, payload) {

      if(localStorage.getItem('users')){
        state.users = JSON.parse(localStorage.getItem("users"));
      }
    
    //check se email já está registado
    if (!state.users.some(user => user.email === payload.email)) {
      //adicionar novo user ao array
        state.users.push({
        id: payload.id,
        username: payload.username,
        email: payload.email,
        admin: false
      });

      localStorage.setItem("users", JSON.stringify(state.users))
/*
      //user agora está registado e o login é feito
      state.loggedUser.id = payload.id;
      state.loggedUser.username = payload.username;
      state.loggedUser.profilePic =
        "https://i.ytimg.com/vi/zQ4LiyFF8RU/hqdefault.jpg";

      state.logged = true;
*/
      alert("Registado");

      //levar user pra pagina inicial?
    } else {
      alert("E-MAIL JÁ REGISTADO");
    }


  },
 
  

},
  actions: {},
  modules: {}
});
