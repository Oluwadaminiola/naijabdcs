<template>
  <div id="app">
    <!-- <Topnav/> -->
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
    <Scrolling />
  </div>
</template>
<script>
import Topnav from "./components/customernav"
import Scrolling from "./components/scrollingRates";
export default {
  components: {
    Scrolling,
    Topnav
  }
};
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
