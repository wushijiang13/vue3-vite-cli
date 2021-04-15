import {RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw>=[
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
export { routes };