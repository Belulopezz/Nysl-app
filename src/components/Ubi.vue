<template>
  <div class="Ubi">
      <b-container>
          <b-row class="ml-3">
              <b-col cols=12>
                  <iframe  class="d-sm-none" :src="mapSrc" width="280" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <iframe  class="d-none d-sm-inline" :src="mapSrc" width="450" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </b-col>
              <b-col cols="12"><h3 >Address: {{address}}</h3></b-col>
          </b-row>
      </b-container>

  </div>
  
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Ubi",
    computed: {
    ...mapState(["landscape"]),
  },
  props:["mapSrc", "address"]
}
</script>

<style scoped>
.row{
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 60px !important;
    width: 90%;
    height: 70%;
    background-color: #008080;
    border: 2px solid black;
}

h3{
    background-color: #003333;
    border: 2px solid  #7fff00;
    color:  #7fff00;
    width: 100%;
}

@media screen and (orientation: landscape){
    iframe{
        margin-left: 0px;
        width: 500px;
    }
    .row{
        width: 600px;
        margin-left: 20px !important;
    }
}
</style>