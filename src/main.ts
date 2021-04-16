import {app}  from "./config/vue/app";
import {router} from './router/router'
import {store} from './store/store'
import {i18n} from "./config/i18n/i18n";
//引入所有按需引入的UI库,只需要调用一下即可,内部会完成全局声明
import './config/lazy_ui/lazy_ui';

/*console.log(import.meta.env.MODE);
console.log(app);*/

app.config.globalProperties.allText='测试全局';

app.use(router)
    .use(store)
    .use(i18n)
    .mount('#app');


