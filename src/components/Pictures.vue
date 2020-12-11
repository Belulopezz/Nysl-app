<template>
  <div class="Pictures">
      <b-container>
      <b-row>
          <b-col cols=12>
              <b-container>
      <b-carousel 
        controls
        indicators
        img-width="1024"
        img-height="200"
        class="carousel"
      >
      <b-carousel-slide :img-src="require('../assets/blog1.jpg')" ></b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/kids.jpg')" ></b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/soccer.jpg')" ></b-carousel-slide>
      
        
      </b-carousel>
        </b-container>
          </b-col>

    
        <div class="clearfix img2">
      
      <b-img thumbnail :src="require('../assets/imagen1.jpg')"></b-img>
      <b-img thumbnail :src="require('../assets/imagen2.jpg')"></b-img>
      <b-img thumbnail :src="require('../assets/blog2.jpg')"></b-img>
      <b-img thumbnail :src="require('../assets/blog3.jpg')"></b-img>
      
      </div>
   
      <div id="img3">
        <b-img thumbnail :src="require('../assets/Soccer-4.jpg')"></b-img>
      
      </div>
      </b-row>
</b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Pictures",
    computed: {
    ...mapState(["landscape"]),
  },
}
</script>

<style scoped lang="scss">

#img4{
    width: 200px;
    height: 200px;
    display: block;
    margin-top: 50px;
}
#img3{
    margin-bottom: 60px;
}
.img2{
    margin-top: 50px;
    width: 100px;
    display: flex;
    flex-wrap: nowrap;


}
.carousel{
    height: 200px !important;
}

@media screen and (orientation: landscape){
    .carousel{
        width: 140vh; 
        margin-left: 0px;
       height: 150px;
    }
  
    .img2{
        margin-top: 200px;
        margin-left: 50px;
        width: 125px;
    }
    #img3{
        width: 500vh;
        margin-left: 50px;
    }
}
</style>