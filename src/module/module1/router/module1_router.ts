import {RouteRecordRaw} from "vue-router";

const module1_router:Array<RouteRecordRaw>=[
    {
        path:"/module1_index",
        name:"module1_index",
        component:()=>import('../page/module1_Index.vue'),
    },
];

export {module1_router}