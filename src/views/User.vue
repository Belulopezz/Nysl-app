<template>
   <div id="user">
       <img id="user-photo" :src="user.photoURL" alt="">
       <h2>{{user.displayName}}</h2>
       <h2>{{user.email}}</h2>
   </div>
  
</template>

<script>

import {mapState} from 'vuex';



export default {
    name: "User",
    computed: {
        ...mapState(['user'])
    }

}
</script>

<style>
#user-photo{
    width: 100px;
    border-radius: 50%;
}

#user{
    margin-top: 200px;
}

h2{
    font-size: 20px;
    width: 50vh;
    background-color: #7fff00;
    color: black;
    border: 2px solid black;
    margin-top: 20px;
    margin-left: 20px;
}

</style>