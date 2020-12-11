<template>
  <div id="app">  
    
    
    <main class="wrapper">
      <Menu />  
      <transition name="fade" mode="out-in">
      <router-view/>
      </transition>
    </main>
    <template>
    <div id="nav">
      <router-link to="/register" class="iconos"><svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></router-link>
      <router-link to="/game" class="iconos"><svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-calendar4-week" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
</svg></router-link>
      <router-link to="/" class="iconos1"><svg width="55px" height="55px" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg></router-link> 
      <router-link to="/locations" class="iconos"><svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></router-link>
      <router-link to="/gallery" class="iconos"><svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-images" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.002 4h-10a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1zm-10-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-10zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  <path fill-rule="evenodd" d="M4 2h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1z"/>
</svg></router-link>
    </div>
    </template>

  </div>
</template>

<script>

import Menu from './components/Menu.vue'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    Menu
  },
  computed:{
    ...mapState(['landscape'])

  },
  methods:{
    ...mapMutations(['listenResize', 'listenUser'])

  },
  beforeMount(){
    this.listenResize()
    this.listenUser()

  }
  
}
</script>

<style lang="scss">
.wrapper{
  background-color: #75a3a385;
  background-image: url("assets/fondo.jpg");
  display: flex;
  width: 100%;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
  width: 100%;
}
#nav {
  
  background-color: #003333;
  border: 3px solid #008080;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 7vh;
  position: fixed;
  bottom: 0px;
  z-index: 999;

  a {
    font-weight: bold;
    color: white;
    margin: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
  
    &.router-link-exact-active {
      color: #7FFF00;
    }
  }

}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to{
  opacity:0;
}

@media screen and (orientation: landscape) {
  #nav{
    top: 0;
    right: 0;
    bottom: initial;
    height: 100%;
    width: 9vw;
    flex-direction: column;

     a {
      height: initial;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      display: flex;
      margin-left: -2px;
     }

  }

 
}




</style>

