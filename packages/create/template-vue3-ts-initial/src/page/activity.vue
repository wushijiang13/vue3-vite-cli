<template>
    <div>
        <h2># Vue3 globalProperties 注入全局的使用</h2>
         {{allText}}
        <h2># Vuex 4.x 的使用</h2>
        <h2>计数器：{{store.state.count}}</h2>
        <el-button  @click="addCount()">点击加1</el-button>
        <h2># Axios 的使用</h2>
        <el-button  @click="testRequest()">点击请求</el-button>
        <h2># 返回</h2>
        <el-button  @click="goBack()">返回</el-button>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";
    import { getAllArticleList } from "../config/request_lib/api/api_list";
    const store = useStore();
    const router = useRouter();
    function addCount(this:any):void{
      store.commit('addCount');
    }
    function testRequest() {
      let data = {page:1}
      let params = {params:btoa(encodeURIComponent(JSON.stringify(data)))}
      //请改成你所需要的传参形式
      getAllArticleList(params).then((res)=>{})
    }
    const goBack = ():void => {
      router.push('/');
    }
</script>