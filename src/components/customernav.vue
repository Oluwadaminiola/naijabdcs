<template>
  <div>
    <nav class="navbar navbar-default navbar-light fixed-top navbar-expand-md">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="../../public/img/toplogo.png" height="32px;" alt />
        </router-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#naijanav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="naijanav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/'}">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/about'}">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/historic-rates'}">
              <router-link to="/historic-rates" class="nav-link">Historic Rates</router-link>
            </li>
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/news'}">
              <router-link to="/news" class="nav-link">News</router-link>
            </li>
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/gallery'}">
              <router-link to="/gallery" class="nav-link">Gallery</router-link>
            </li>
            <li class="nav-item mx-2 px-0" :class="{'active': $route.path == '/contact-us'}">
              <router-link to="/contact-us" class="nav-link">Contact Us</router-link>
            </li>
            <li class="nav-item mx-2">
              <form class="form-inline input-group px-1">
                <div class="input-group-prepend px-1">
                  <img src="../../public/img/worldsvg.svg" alt />
                </div>
                <select name id class="form-control px-0 py-0" style="width: 30px; height: 30px;">
                  <option value>EN</option>
                  <option value>BR</option>
                </select>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>