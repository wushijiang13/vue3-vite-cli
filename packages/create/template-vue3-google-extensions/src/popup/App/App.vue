<template>
  <div class="main_app">
    <h1>Hello Popup</h1>
    <button @click="clickTest">测试</button>
  </div>
</template>

<script setup>
  let chrome = window.chrome;
  function clickTest(){
    chrome.runtime.sendMessage({type:'test'});
  }
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
