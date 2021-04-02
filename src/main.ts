import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/router'
import {store} from './store/store'
import {useRouter} from "vue-router";

let app = createApp(App);
app.config.globalProperties.allText='测试全局';
app.config.globalProperties.$router=useRouter();
app.use(router)
    .use(store)
    .mount('#app');
