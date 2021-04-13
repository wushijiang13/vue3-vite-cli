<template>
    <div class="activity">

        <p>Vue3 globalProperties 注入全局的使用</p>
         {{allText}}
        <hr/>
        <p>Vuex 4.x 的使用</p>
        <p>计数器：{{store.state.count}}</p>
        <el-button  @click="addCount()">点击加1</el-button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import {useStore} from "vuex";
    export default defineComponent({
        name: "activity",
        setup(){
            let store:any=useStore();
            function addCount(this:any):void{
                this.store.commit('addCount');
            }
            return {
                store,
                addCount,
            }
        },
    })
</script>

<style scoped>
    hr{
        width: 80%;
    }
</style>