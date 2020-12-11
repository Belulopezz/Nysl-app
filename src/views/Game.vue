<template>
  <div class="schedule">
      <header class="w-100">
      <h2>GAME INFORMATION</h2>
      <p id="line"></p>
      </header>
      <div class="container">
          <select name="select" class="m-0 p-0 ml-3" v-model="monthSelected">
          <option value="All">Month</option> 
          <option :value="month" v-for="(month,index) of this.months" :key="index">{{month}}</option>
          </select>
       </div>
       <div v-for="(object,index) of filtered" :key="index">
           <Card
           :date="object.date"
    :month="object.month"
    :team1="object.team1"
    :team2="object.team2"
    :location="object.location"
    :indice="index"
    :time="object.time"
    :id="object.id" />

       </div>

      

  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
    name: "Game",
    components:{
        Card
    },
    data: function (){
        return{
            Info: [ 
                {
                date: '9/01',
                month: 'september',
                team1: 'U1',
                team2: 'U2',
                time: '9:30 a.m',
                id: '1',
                location: 'AJ Katzenmaier',

                },
                {
                date: '9/01',
                month: 'september',
                team1: 'U3',
                team2: 'u2',
                time: '1:00 p.m',
                id: '2',
                location: 'Greenbay',
                },
                {
                date: '9/08',
                month: 'september',
                team1: 'U5',
                team2: 'u6',
                time: '9:30 a.m',
                id: '3',
                location: 'Howard A Yeager',
                },
                {
                date: '9/08',
                month: 'september',
                team1: 'U6',
                team2: 'u1',
                time: '1:00 p.m',
                id: '4',
                location: 'Marjorie P Hart',
                },
                {
                date: '9/15',
                month: 'september',
                team1: 'U2',
                team2: 'u4',
                time: '9:30 a.m',
                id: '5',
                location: 'AJ Katzenmaier',
                },
                {
                date: '9/15',
                month: 'september',
                team1: 'U3',
                team2: 'u5',
                time: '1:00 p.m',
                id: '6',
                location: 'AJ Katzenmaier',
                },
                {
                date: '9/22',
                month: 'september',
                team1: 'U1',
                team2: 'u3',
                time: '9:30 a.m',
                id: '7',
                location: 'South',
                },
                {
                date: '9/22',
                month: 'september',
                team1: 'U2',
                team2: 'u6',
                time: '1:00 p.m',
                id: '8',
                location: 'Howard A Yeager',
                },
                {
                date: '9/29',
                month: 'september',
                team1: 'U4',
                team2: 'U5',
                time: '9:30 a.m',
                id: '9',
                location: 'Greenbay',
                },
                {
                date: '10/06',
                month: 'october',
                team1: 'U2',
                team2: 'U5',
                time: '9:30 a.m',
                id: '10',
                location: 'Marjorie P Hart',
                },
                {
                date: '10/06',
                month: 'october',
                team1: 'U1',
                team2: 'U6',
                time: '1:00 p.m',
                id: '11',
                location: 'South',
                },
                 {
                date: '10/13',
                month: 'october',
                team1: 'U3',
                team2: 'U4',
                time: '9:30 a.m',
                id: '12',
                location: 'Howard A Yeager',
                },
                {
                date: '10/13',
                month: 'october',
                team1: 'U5',
                team2: 'U1',
                time: '1:00 p.m',
                id: '13',
                location: 'Greenbay',
                },
                {
                date: '10/20',
                month: 'october',
                team1: 'U6',
                team2: 'U3',
                time: '9:30 a.m',
                id: '14',
                location: 'North',
                },
                 {
                date: '10/20',
                month: 'october',
                team1: 'U2',
                team2: 'U4',
                time: '1:00 p.m',
                id: '15',
                location: 'Marjorie P Hart',
                },
                 {
                date: '10/27',
                month: 'october',
                team1: 'U3',
                team2: 'U1',
                time: '9:30 a.m',
                id: '16',
                location: 'AJ Katzenmaier',
                },
                {
                date: '10/27',
                month: 'october',
                team1: 'U5',
                team2: 'U6',
                time: '1:00 p.m',
                id: '17',
                location: 'Howard A Yeager',
                 }
            ],
            locations:["Howard A Yeager","AJ Katzenmaier","Marjorie P Hart","North","Greenbay","South"],
      months:["september", "october"],
      teams:["U1","U2", "U3", "U4", "U5","U6"],
      monthSelected:"All",
         }
        },
        computed: {
            filtered: function(){
                return this.Info.filter(team => (this.monthSelected == team.month || this.monthSelected=="All"))
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