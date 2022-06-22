<template>
    <div class="index">
        <h1>{{msg}}</h1>
        <a href="https://wushijiang.cn/vue3-vite-cli/template/template-vue3-ts-initial.html">文档地址</a>
        <h2># {{ $t('index.elementTitle')}}</h2>
        <div>
          <el-button @click="goActivity()">{{ $t('index.jumps')}}</el-button>
          <el-button>{{ $t('index.defaultBtn')}}</el-button>
        </div>
        <h2> # Element-Plus 内置的多语言中文展示</h2>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>
        <h2># Ant-Design-Vue 2.x 使用</h2>
        <div>
          <a-button type="primary">
            ant的引入
          </a-button>
          <a-button type="dashed">Dashed</a-button>
          <a-button type="danger">Danger</a-button>
          <a-button type="primary">按钮</a-button>
          <a-button type="link">Link</a-button>
        </div>
        <h2># Vant v4 使用</h2>
        <div>
          <van-button type="primary">主要按钮</van-button>
          <van-button type="success">成功按钮</van-button>
          <van-button type="default">默认按钮</van-button>
          <van-button type="warning">警告按钮</van-button>
          <van-button type="danger">危险按钮</van-button>
        </div>
        <h2># I18n v9 使用</h2>
        <el-button  @click="switchLanguage()">切换{{store.state.languages  == 'zh' ? "中文" : "英文"}}</el-button>
        <h2># 多打包引入路由后跳转</h2>
        <el-button  @click="goModule1Index()">跳转到模块</el-button>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import {useStore} from "vuex";
    import {useI18n} from "vue-i18n";
    import {useRouter} from 'vue-router';
    import {LanginTerval} from "../config/i18n/config/i18n_enum";

    let msg=ref('Hello Vue 3 + TypeScript + Vite');
    const store = useStore();
    let i18n = useI18n();
    const router = useRouter();

    function switchLanguage(this:any):void{
      console.log(import.meta.env);
      this.store.commit('setLang',(store.state.languages == LanginTerval.ZH ? LanginTerval.EN : LanginTerval.ZH));
      i18n.locale.value=store.state.languages;
    }
    function goActivity(this:any):void{
      router.push('/activity');
    }

    function goModule1Index(this:any) {
      router.push('/module1_index');
    }

    function handleSizeChange(val:any) {
      console.log(`每页 ${val} 条`);
    }

    function handleCurrentChange(val:any) {
      console.log(`当前页: ${val}`);
    }
</script>

<style scoped>
    .ant-btn{
        margin: 5px;
    }
    .van-button{
        margin: 5px;
    }
</style>