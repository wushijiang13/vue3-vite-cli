<template>
  <div id="app">
    <router-view to="/"/>
    <el-button @click="goActivity()">跳转</el-button>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
  setup(){
    //引入element的小坑 外面需要传入this
    //因为el-button 调用后没有传入this 导致this.$router 报错
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