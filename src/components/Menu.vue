<template>
  <div id="menuLogin">
    
        <b-button v-b-toggle.sidebar-no-header><b-icon icon="arrow-bar-down" aria-hidden="true"></b-icon></b-button>
        <b-container>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <img src="../assets/nysl_logo.png" alt="logo" id="logo">
          <nav class="mb-3">
            <b-nav vertical>
              <router-link to="/Login" @click="hide">Login</router-link>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close</b-button>
        </div>
      </template>
    </b-sidebar>
    </b-container>
   
    
  </div>
</template>

<script>
export default {
    name: 'Menu',

}
</script >

<style  scoped lang="scss">
.bg-grey{
    background-color: #80ff008a !important;
}

#logo{
    width: 100px;

}


.b-sidebar > .b-sidebar-body {
   background-color: transparent !important;
}

#menuLogin{
  position: absolute;
}

button{
    background-color: hsla(90, 100%, 50%, 0.541) !important;
     color: black !important;
     margin-right: 50% !important;
     border-radius: 0 !important;
}
</style>