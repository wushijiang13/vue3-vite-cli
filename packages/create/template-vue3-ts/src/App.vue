<template>
    <div id="app">
      <h1>Hello Word - Vu3-Vite-Cli !</h1>
      <div class="content">
        <a href="https://wushijiang.cn/vue3-vite-cli/">docs</a>
        <a href="https://github.com/wushijiang13/vue3-vite-cli">github</a>
      </div>
    </div>
</template>

<script setup lang="ts" >
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-left: 20px;
}
.content{
  display: flex;
  justify-content: space-around;
  width: 100px;

}
.content a{
  color: #00b279;
}
</style>