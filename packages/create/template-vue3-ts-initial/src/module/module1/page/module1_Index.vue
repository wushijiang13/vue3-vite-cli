<template>
  <div>
    <h1>{{content}}</h1>
    <el-button @click="goBack">返回</el-button>
  </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    const router = useRouter();
    const content = ref('这是模块页面');
    const goBack =  ():void => {
      router.push('/');
    }
</script>