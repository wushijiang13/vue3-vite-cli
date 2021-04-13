<template>
    <div class="index">
        {{msg}}
        <p> Element-Plus 使用</p>
        <el-button @click="goActivity()">跳转</el-button>
        <el-button>默认按钮</el-button>

        <p> Ant-Design-Vue 2.x 使用</p>
        <a-button type="primary">
            ant的引入
        </a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="danger">Danger</a-button>
        <a-button type="primary">按钮</a-button>
        <a-button type="link">Link</a-button>

        <p> Vant v3 使用</p>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="success">成功按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
    </div>
</template>

<script lang="ts">
    import {ref,defineComponent} from 'vue';
    export default defineComponent ({
        name:"index",
        setup(){
            let msg=ref('Hello Vue 3 + TypeScript + Vite');
            function goActivity(this:any):void{
                this.$router.push('/activity');
            }
            return{
                msg,
                goActivity,
            }
        }
    })
</script>

<style scoped>
    .ant-btn{
        margin: 5px;
    }
    .van-button{
        margin: 5px;
    }
</style>