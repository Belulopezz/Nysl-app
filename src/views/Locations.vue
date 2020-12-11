<template>
    <div class="locations">
  <header class="w-100">
      <h2>GAME LOCATIONS</h2>
      <p id="line"></p>
      </header>

      <div class="container">
          <select name="select" class="m-0 p-0 ml-3" v-model="locationSelected">
          <option value="All">Locations</option> 
          <option :value="location" v-for="(location,index) of this.locations" :key="index">{{location}}</option>
          </select>
       </div>

      <div v-for="(object,index) of filtered" :key="index">
           <Ubi
    :location="object.location"
    :address="object.address"
    :mapSrc="object.directionSrc"
    />
       </div>
       
       
  </div>
</template>

<script>
import Ubi from '@/components/Ubi.vue'

export default {
    name: "Locations",
    components: {
        Ubi
    },
    data: function (){
        return{
            gameLocations: [
                {
                    location:'AJ Katzenmaier',
                    directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.656836443422!2d-87.6312603845582!3d41.900236679220434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x754eb9271a4a27fd!2sOgden%20Elementary%20School!5e0!3m2!1ses-419!2sar!4v1606339598840!5m2!1ses-419!2sar",
                    address: '24 W. Walton St., Chicago, IL 60610'
                },
                {
                    direction:'Greenbay',
                    directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.022981686595!2d-87.64002218455776!3d41.913864679219344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339988098!5m2!1ses-419!2sar",
                    address: '1734 N. Orleans St., Chicago, IL 60614'
                },
                {
                    location:'Howard A Yeager',
                    directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5864786779157!2d-87.66530238455746!3d41.92324747921862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b4d680e25a482e5!2sSt.%20Josaphat%20School!5e0!3m2!1ses-419!2sar!4v1606340752227!5m2!1ses-419!2sar",
                    address: '2245 N. Southport Ave., Chicago, IL 60614'
                },
                {
                    location:'Marjorie P Hart',
                    directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289839348977!2d-87.64816138455728!3d41.92962287921805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses-419!2sar!4v1606339809160!5m2!1ses-419!2sar",
                    address: '2625 N. Orchard St., Chicago, IL 60614'
                },
                {
                    location:'North',
                    directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3355487036233!2d-87.64831158455799!3d41.90714487921991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5736e62f19086c62!2sNorth%20Elementary!5e0!3m2!1ses-419!2sar!4v1606340221046!5m2!1ses-419!2sar",
                    address: '1409 N. Ogden Ave., Chicago, IL 60610'
                },
                {
                    location:'South',
                    directionSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.730653315668!2d-87.65286418455756!3d41.920148579218846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1caabcbc4893f0da!2sSt%20James%20Lutheran%20School!5e0!3m2!1ses-419!2sar!4v1606340535158!5m2!1ses-419!2sar",
                    address: '2101 N. Fremont St., Chicago, IL 60614'
                },

            ],
            locations:["Howard A Yeager","AJ Katzenmaier","Marjorie P Hart","North","Greenbay","South"],
            locationSelected:"All",

        }
    },
    computed: {
            filtered: function(){
                return this.gameLocations.filter(direction => (this.locationSelected == direction.location|| this.locationSelected=="All"))
            }
        }
}
</script>

<style scoped lang="scss">
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

select{
    width: 50%;
    height: 50px;
    border: 2px solid black;
    font-size: 30px;
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