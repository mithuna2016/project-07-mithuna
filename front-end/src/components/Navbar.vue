<template>
<div class="text-center">

      <nav v-if="$route.name !='Login' && $route.name !='Signup'  " class="navbar navbar-expand-lg navbar-dark   background h5 bg-gradient">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        
        <ul class="navbar-nav   ">
          <li class="nav-item col-md-6 pt-md-0 pt-3  ">
             <!---link to home page -->
             <router-link class=" nav-link bg-light text-primary font-weight-bold text-center border border-primary rounded" to="/"> 
            <i class="fas fa-house-user fa-1x"></i> Home</router-link> 
           
          </li>
          <li class="nav-item col-md-6 pt-md-0 pt-3">
              <router-link class="nav-link bg-light text-primary font-weight-bold  text-center border border-primary rounded" to="/accountSetting">
             <i class="fas fa-user-cog fa-1x "></i> Account Setting</router-link> 
          </li>
          <li class="nav-item col-md-6 pt-md-0 pt-3">
            <router-link to="/login" class="nav-link bg-light text-primary font-weight-bold  text-center  border border-primary rounded"> 
            <i class="fas fa-sign-out-alt fa-1x"></i>logout</router-link>
          </li>
        </ul>
        
      </div>
      <img src="@/assets/logo.png" alt="logo" class="logoimg ">
    </nav>
    <router-view/>
</div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>