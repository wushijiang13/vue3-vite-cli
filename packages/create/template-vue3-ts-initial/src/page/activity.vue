<template>
    <div class="activity">

        <p>Vue3 globalProperties 注入全局的使用</p>
         {{allText}}
        <hr/>
        <p>Vuex 4.x 的使用</p>
        <p>计数器：{{store.state.count}}</p>
        <el-button  @click="addCount()">点击加1</el-button>
        <hr/>
        <p>Axios 的使用</p>
        <el-button  @click="testRequest()">点击请求</el-button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import {useStore} from "vuex";
    import {getAllArticleList} from "../config/request_lib/api/api_list";

    export default defineComponent({
        name: "activity",
        setup(){
            let store:any=useStore();
            function addCount(this:any):void{
                this.store.commit('addCount');
            }
            function testRequest() {
                let data:any={page:1}
                let params:object={params:btoa(encodeURIComponent(JSON.stringify(data)))}
                //请改成你所需要的传参形式
                getAllArticleList(params).then((res:any)=>{
                    console.log(res);
                })
            }
            return {
                store,
                addCount,
                testRequest
            }
        },
    })
</script>

<style scoped>
    hr{
        width: 80%;
    }
</style>