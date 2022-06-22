<template>
  <el-config-provider :locale="lang">
    <div id="app">
      <router-view to="/"/>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts" >
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { reactive } from 'vue';
const lang = reactive(zhCn)
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
  align-items: flex-start;
  margin-left: 20px;
}
</style>