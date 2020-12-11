<template>
  <div class="Card">
      <b-container>
          <b-row class="ml-4">
              <b-col cols=12><h2>{{date}}</h2></b-col>
              <b-col cols="5">
            <h3 >{{team1}}</h3></b-col>
        <b-col cols="2" class="text-dark"><h5>vs</h5></b-col>
        <b-col cols="5">
            <h3>{{team2}}</h3>
            </b-col>
            <b-col style="color: white;">
               <b-col align-self="start">Time:{{time}}</b-col>
                <b-col align-self="start">Direction: {{location}}</b-col> 
               <router-link :to="'/Chatroom/' + id">
                   <b-button pill><b-icon icon="chat-dots" aria-hidden="true" font-scale="4"></b-icon></b-button>
               </router-link>
            </b-col>

          </b-row>
      </b-container>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Card",
    computed: {
    ...mapState(["landscape"]),
  },
    props:["date", "month","team1", "team2", "time","location", "indice", "id"]

}
</script>

<style scoped lang="scss">
.row{
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 60px !important;
    width: 90%;
    height: 200px;
    background-color: #008080;
    border: 2px solid black;

}
h2{
    background-color: #003333;
    border: 2px solid  #7fff00;
    color:  #7fff00;
}
h3{
    color: white;
}

h5{
    color: #7fff00;
}
.container{
    width: 100%;
    height: 100%;
}

button{
    background-color: #7fff00 !important;
    color: black !important;
}

@media screen and (orientation: landscape){
    h2{
        width: 100vh;
}
}
</style>