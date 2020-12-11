<template>
  <div class="login w-100">
     
      <template v-if="user == null">
          <div class="d-flex justify-content-center w-100 mt-5" id="container">
          <b-icon icon="person-circle" aria-hidden="true" font-scale="5"></b-icon>
          <button @click="login()" id="login">Login with Google</button>
          </div>
      </template>
      <template v-else>
          <div id="container2">
          <button>
              <router-link to="/User">
              My info
              </router-link>
              </button>
          <button @click="logout()">Logout</button>
          </div>
      </template>

  </div>
</template>

<script>
import firebase from 'firebase/app';
import "firebase/auth";
import {mapState} from 'vuex';


export default {
    name: 'Login',
    computed:{
        ...mapState(['user'])

    },
    methods: {
        login(){
          let provider = new firebase.auth.GoogleAuthProvider()

          firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => (
             console.log('logged in' + result.user.email)
          ))
          .catch(error => (console.log(error.code)))

        },
        logout(){

            firebase
            .auth()
            .signOut()
            .then(() => (
                console.log('logged out')
            ))
            .catch(error =>{
                console.log(error.code)
            })

        }
    }

}
</script>

<style scoped lang="scss">
a{
    color: #7fff00 !important;
}

button{
    color:  #7fff00 !important;
    background-color:  #008080 !important;
    border: 2px solid black;
    border-radius: 15px !important;
    font-weight: bold;
    font-size: 20px;
    width: 200px;
    height: 70px;
    margin: auto;
    
}

#container{
    width: 90vh;
    height: 30vh;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 30px;


}
#container2{
    width: 50vh;
    height: 30vh;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
    margin-top: 150px;


}


</style>