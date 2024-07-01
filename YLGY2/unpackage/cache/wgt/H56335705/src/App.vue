<template>
  <div id="app">
    <img class="backead" src="./assets/bg.jpg">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
#app {
  padding: 16px 16px 50px;
  min-height: 100vh;
  background-size: 100% 100%;
}
.backead{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.content {
  max-width: 480px;
  margin: 0 auto;
}
</style>
