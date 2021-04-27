<template>
    <div class="index">
        {{msg}}
        <p>{{ $t('index.elementTitle')}}</p>
        <el-button @click="goActivity()">{{ $t('index.jumps')}}</el-button>
        <el-button>{{ $t('index.defaultBtn')}}</el-button>

        <p>Element-Plus 内置的多语言中文展示</p>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>

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

        <p>I18n v9 使用</p>
        <el-button   @click="switchLanguage()">切换{{store.state.languages  == 'zh' ? "中文" : "英文"}}</el-button>

        <p>测试多打包引入路由后跳转</p>
        <el-button   @click="goModule1Index()">跳转到module1_index</el-button>

    </div>
</template>

<script lang="ts">
    import {ref,defineComponent} from 'vue';
    import {useStore} from "vuex";
    import {useI18n} from "vue-i18n";
    import {LanginTerval} from "../config/i18n/config/i18n_enum";

    export default defineComponent ({
        name:"index",
        setup(){
            let msg=ref('Hello Vue 3 + TypeScript + Vite');
            let store:any=useStore();
            let i18n:any=useI18n();

            function switchLanguage(this:any):void{
                console.log(import.meta.env);
                this.store.commit('setLang',(store.state.languages == LanginTerval.ZH ? LanginTerval.EN : LanginTerval.ZH));
                i18n.locale.value=store.state.languages;
            }
            function goActivity(this:any):void{
                this.$router.push('/activity');
            }
            
            function goModule1Index(this:any) {
                console.log(this.$router);
                this.$router.push('/module1_index');
            }
            
           function handleSizeChange(val:any) {
                console.log(`每页 ${val} 条`);
            }

            function handleCurrentChange(val:any) {
                console.log(`当前页: ${val}`);
            }
            return{
                msg,
                goActivity,
                switchLanguage,
                goModule1Index,
                handleSizeChange,
                handleCurrentChange,
                store,
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