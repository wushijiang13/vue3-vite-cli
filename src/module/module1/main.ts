import {app} from "../../config/vue/app";
import {initRouter} from "../../router/router";
import  {module1_router} from '../module1/router/module1_router'

app.use(initRouter(module1_router))
    .mount("#app")