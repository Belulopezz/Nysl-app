<template>
  <div class="home w-100 p-0">
    <h2>{{msg}}</h2>
    <div class="main">
    <b-container id="carouselContainer">
      <b-carousel 
        controls
        indicators
        img-width="1024"
        img-height="300"
        class="carousel"
      >
  
      <b-carousel-slide caption="August 4" text="NYSL Fundraiser" :img-src="require('../assets/index1.jpg')"></b-carousel-slide>
      <b-carousel-slide caption="August 16" text="Season Kick-off: Meet the Teams" :img-src="require('../assets/index2.jpg')"></b-carousel-slide>
      <b-carousel-slide caption="September 1" text="First Game of the Season" :img-src="require('../assets/index3.jpg')"></b-carousel-slide>
        
      </b-carousel>
        </b-container>
    <h2>ABOUT US</h2>
    <b-container>
        <b-card
        title= "Mision"
        style= "max-width: 70vh height: 500px;"
        class="mb-2 card"
        
        >
        <b-card-text>
          To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportmanship.
        </b-card-text>
        </b-card>
         <b-card
        title= "Vision"
        style= "max-width: 70vh  height: 500px;"
        class="mb-2 card"
        
        >
        <b-card-text>
          The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadrship
        </b-card-text>
        </b-card>

         <b-card
        title= "General Information"
        style= "max-width: 70vh  height: 500px;"
        class="mb-2 card"
        
        >
        <b-card-text>
          The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be betwenn the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.
        </b-card-text>
        </b-card>
    </b-container>

      <h2>CONTACT US</h2>
      <div id="contact">
        <p class="add"><strong>Phone: </strong><a href="phoneto:(630) 690-8132">(630) 690-8132</a> </p>
        <p class="add"><strong>Email 1:</strong><a href="mailto:michael.randall@chisoccer.org">michael.randall@chisoccer.org</a> </p>
        <p class="add"><strong>Email 2: </strong><a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></p>
      </div>
          
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Index",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["landscape"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  padding: 1em;
}
.carousel{
  width: 350px;
   height: 50% !important; 
   padding: 0; 
   margin-left: 15px;
}
#carouselContainer{
  height: 200px !important;
}
#contact{
    margin-top: 0;
     display: block;
    width: 80%;
    height: 200px;
    margin-left: 45px;
    background-color: #003333;
    border: 2px solid #7fff00 ;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 100px;
}
.add{
      background-color: #7fff00 ;
    border-radius: 10px;
}
.card{
  width: 320px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #008080;
  color: white;
  border: 3px solid #7fff00;
  margin-left: 4vh;
}

h2 {
  font-weight: bold;
  width: 97%;
  font-size: 30px;
  text-align: center;
  margin-top: 10%;
  color: black;
  background-color: #7fff00;
  border: 4px solid black;
  border-radius: 10px;
  padding: 2px;
  margin-left: 20px;
 
}

#about{
  margin-top: 20px;
  margin-left: 5%;
}

main{
 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  

}


@media screen and (orientation: landscape) {
  h2 {
    padding: 5px;
    font-weight: bold;
    width: 97%;
    font-size: 30px;
    text-align: center;
    margin-top: 10%;
    margin-left: 55px;
    color: black;
    background-color: #7fff00;
    border: 3px solid black;
  }
  .carousel{
    width: 600px;
    
  }

.card{
  width: 97%;
  margin-left: 50px;
}

#contact{
  width: 97%;
  margin-left: 53px;
}
}


</style>
