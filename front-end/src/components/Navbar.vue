<template>
<div>

      <nav v-if="$route.name !='Login' && $route.name !='Signup'  " class="navbar navbar-expand-lg navbar-dark   background h5">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img src="@/assets/logo.png" alt="logo" class="logoimg">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item  ">
             <!---link to home page -->
             <router-link class=" nav-link  text-warning" to="/">Home</router-link> 
           
          </li>
          <li class="nav-item">
            <a class="nav-link  text-warning " href="#">Manage Account</a>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link  text-warning ">logout</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view/>
</div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>