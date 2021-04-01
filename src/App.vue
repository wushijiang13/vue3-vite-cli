<template>
  <div id="app">
    <router-view/>
    <button @click="goActivity">跳转</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  setup(){
    function goActivity(this:any):void{
      this.$router.push('/activity');
    }
    return{
      goActivity,
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>