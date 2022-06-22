import {RouteRecordRaw} from 'vue-router'
import {module1_router} from "../module/module1/router/module1_router";

let routers:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'index',
        component:() => import('../page/index.vue'),
    },
    {
        name:"activity",
        path:'/activity',
        component:()=>import('../page/activity.vue'),
    }
]

//多模块合成一个项目的引用，如果模块过多的话，可通过循环添加。
routers = [...routers, ...module1_router];

export { routers };