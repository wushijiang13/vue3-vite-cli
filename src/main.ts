// import {app}  from "./config/vue/app";
import {router} from './router/router'
import {store} from './store/store'
import {useRouter} from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
//引入所有按需引入的UI库,只需要调用一下即可,内部会完成全局声明
// import './config/lazy_ui/lazy_ui';

let app = createApp(App);

app.config.globalProperties.allText='测试全局';
app.config.globalProperties.$router=useRouter();

console.log(app);

app.use(router)
    .use(store)
    .mount('#app');


