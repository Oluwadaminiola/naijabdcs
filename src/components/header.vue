<template>
  <div>
    <nav class="navbar navbar-default navbar-light fixed-top navbar-expand-md">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="../../public/img/toplogo.png" height="32px;" alt />
        </router-link>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/'}">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/about'}">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
          </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>