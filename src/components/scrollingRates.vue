<template>
  <div>
    <nav class="fixed-bottom">
      <div class="marquee">
        <div class="marquee-content">
          <span class="item-collection-1">
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            
          </span>
          <span class="item-collection-2">
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
            <span><b class="p-15 px-3">BTN/NGN = 60703.3594</b></span>
          
          </span>
        </div>
      </div>

    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.marquee {
  width: 100%;
  background: rgba(0,0,0, 0.3);
  color: #fff;
  /* height: 80px; */
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  /* border: 1px solid blue; */
}
.marquee-content {
  display: inline-block;
  margin-top: 5px;
  animation: marquee 30s linear infinite;
}
.item-collection-1 {
  position: relative;
  left: 0%;
  animation: swap 30s linear infinite;
}
@keyframes swap {
  0%,
  50% {
    left: 0%;
  }
  50.01%,
  100% {
    left: 100%;
  }
}
.marquee-content:hover {
  animation-play-state: paused;
}
.item1 {
  display: inline-block;
  height: 70px;
  width: 140px;
  background: cyan;
  vertical-align: top;
  margin-left: 15px;
}
.item2 {
  display: inline-block;
  height: 70px;
  width: 100px;
  background: magenta;
  vertical-align: top;
  margin-left: 15px;
  line-height: 14px;
}
/* Transition */

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>