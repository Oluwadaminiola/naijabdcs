<template>
  <div>
    <nav class="fixed-top">
        <div class="topnav ">
          <div class="container">
            <router-link to="/" class="navbar-brand">
              <img src="../../public/img/toplogo.png" height="32px;" alt />
            </router-link>
            <ul class="list-unstyled d-inline ml-auto"></ul>
          </div>
        </div>
        <nav class="navbar-expand-md">
            <div class="greennav">
              <div class="container py-3">
                <button class="navbar-toggler" data-toggle="collapse" data-target="#naijanav">
                  open
                </button>
                <div class="collapse navbar-collapse" id="naijanav">
                  <ul class="navbar-nav d-flex justify-content-between">
                    <li class="nav-item pr-lg-4 mr-lg-2" :class="{'active': $route.path == '/admin/newrate'}">
                      <router-link to="/admin/newrate" class="nav-link">
                        <img src="../../public/img/rate.svg" alt="" class="aa"> 
                        <img src="../../public/img/rate-w.svg" alt="" class="bb"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Input Rate
                      </router-link>
                    </li>
                    <li class="nav-item px-lg-5" :class="{'active': $route.path == '/admin/previousrate'}">
                      <router-link to="/admin/previousrate" class="nav-link">
                        <img src="../../public/img/ratte.svg" alt="" class="aa"> 
                        <img src="../../public/img/ratte-w.svg" alt="" class="bb"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Previous Rate
                      </router-link>
                    </li>
                    <li class="nav-item px-lg-5" :class="{'active': $route.path == '/admin/advert'}">
                      <router-link to="/admin/advert" class="nav-link">
                        <img src="../../public/img/advert.svg" alt="" class="aa"> 
                        <img src="../../public/img/advert-w.svg" alt="" class="bb"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advert management
                      </router-link>
                    </li>
                    <li class="nav-item px-lg-5" :class="{'active': $route.path == '/admin/operators'}">
                      <router-link to="/admin/operators" class="nav-link">
                        <img src="../../public/img/operator.svg" alt="" class="aa"> 
                        <img src="../../public/img/operator-w.svg" alt="" class="bb"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bdc Operators
                      </router-link>
                    </li>
                    <li class="nav-item pl-lg-4 ml-lg-2" :class="{'active': $route.path == '/admin/settings'}">
                      <router-link to="/admin/settings" class="nav-link">
                        <img src="../../public/img/settings.svg" alt="" class="aa"> 
                        <img src="../../public/img/settings-w.svg" alt="" class="bb"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings
                      </router-link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
        </nav>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>