import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {routers} from './routes';

function initRouter(routes:RouteRecordRaw[]=routers){
     return  createRouter(
        {
            history:createWebHashHistory(),
            routes,
    })
}

export { initRouter };