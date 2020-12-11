<template>
  <div id="chatroom">
      <h1>FORUM</h1>
      <template v-if="user == null">
          <div class="login">
          <router-link to="/Login">
          <h1>Welcome</h1>
          <h2>Please login to have access to the chatroom</h2>
          <b-button>Login</b-button>
          </router-link>
          </div>
      </template>
      <template v-else>
          <div id="body">
              <div id="messageContainer">
              <div v-for="(message, index) in messages" :key="index" class="bubble">
                  <p>
                      <strong>{{message.author}} said: </strong>
                  </p>
                  <p>
                      {{message.body}}
                  </p>
              </div>
              <div id="bottom"></div>
               </div>
              <form @submit.prevent="post()">
                  <input type="text" placeholder="Enter your message" v-model="input" id="box" />
          
                  <b-button type="submit">Send</b-button>
              </form>
                      
         
          </div>

      </template>
  </div>
</template>

<script>
import {mapState} from "vuex";
import { db } from "../firebase/db";

export default {
    name: 'Chatroom',
    data(){
        return{
            messages: [],
            input:null
        }

    },
    methods:{
        post: function(){
            let folder = db.ref("forum/match" + this.$route.params.id)
          
          let message = {
              body: this.input,
              author: this.user.displayName,
              date: new Date(),
              img: this.user.photoURL
          }
        
          folder.push(message)
          this.input = null
        },
         updateScroll: function(){
         document.getElementById('bottom').scrollIntoView()
        }

    },
    computed:{
        ...mapState(['user'])
    },
    mounted(){
        this.messages = [];
        db.ref("forum/match" + this.$route.params.id).on("child_added",(snapshot) => {
            this.messages.push(snapshot.val())
            this.$nextTick(() => {
                this.updateScroll()
            })
        })
    }


}
</script>

<style scoped lang="scss">

.body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bubble{
    text-align: left;
    border-radius: 20px;
    background-color:  #008080cb;
    padding: 2em 1em;
    margin: 20px 0;
    min-width: 25vw;
    color: white;
}
button{
    background-color: hsla(90, 100%, 50%, 0.541) !important;
     color: black !important;
     border-radius: 0 !important;


}
#messageContainer{
    overflow-y: scroll !important;
    height: 60vh;
}

.login{
    width: 50vh;
    height: 30vh;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    margin-left: 25px;
    padding: 30px;

}
h1{
   color: black;
  background-color: #7fff00;
  border: 4px solid black;
    border-radius: 10px;
    margin-top: 40px;
    padding: 15px;
}

h2{
    font-size: 30px;
    color: black;
}

p{
    font-size: 30px;
    color: white;
}

#chatroom{
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

</style>