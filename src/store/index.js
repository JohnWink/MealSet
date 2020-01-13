import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Array de users
    users:[],

    loggedUser:[],
  
     //variável para a função login
  existUser: false,

  //bool pa dar check se alguém está autenticado
  logged: false,
  },

 

  getters: {

    checkLogged: state => state.logged,
    
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
      if(!state.users.some(user =>user.username === payload.username )){

      
        //adicionar novo user ao array
          state.users.push({
          id: payload.id,
          username: payload.username,
          password:payload.password,
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
      }else{
        alert("Username Já Utilizado")
      }
    }else {
      alert("E-MAIL JÁ REGISTADO");
    }


  },
 
  LOGIN(state,payload){
    if(localStorage.getItem('users')){
      state.users = JSON.parse(localStorage.getItem("users"));
    }

    for (const user of state.users) {
      if (
        user.username === payload.username &&
        user.password === payload.password
      ) {
      state.loggedUser.push({
        id: user.id,
        username: payload.username,
        admin: false
      })
      
        sessionStorage.setItem(
          "loggedUser",
          JSON.stringify(state.loggedUser)
        );
        alert("LOGIN");

        state.existUser = true;
       
      }
    }

    if (state.existUser === false) {
      alert("Credenciais Inválidas");

    } else if(state.existUser===true) {
      state.existUser = false;
      state.logged = true;
    }

  },

  LOGOUT(state) {
    state.loggedUser = {};
    state.logged = false;
    sessionStorage.setItem("loggedUser",JSON.stringify(state.loggedUser))
  },
  

},
  actions: {},
  modules: {}
});
