<template>
  <div class="gallery">
      <header class="w-100">
      <h2>GALLERY</h2>
      <p id="line"></p>
      </header>

      <Pictures />
  </div>
</template>

<script>
import Pictures from '@/components/Pictures.vue';

export default {
    name: "Gallery",
    components: {
        Pictures
    }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
  width: 90%;
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
#line{
  border-bottom: 2px solid #7fff00;
}

@media screen and (orientation: landscape){
   h2{
       width:100%;
       margin-left: 50px;
   }

   #line{
       margin-left: 50px;
       width: 100%;
   }
}
</style>