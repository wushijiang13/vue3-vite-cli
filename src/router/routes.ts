import index from '../page/index.vue';
import activity from '../page/activity.vue';

const routes=[
    {
        name:"index",
        path:'/',
        component:()=>index,
    },
    {
        name:"activity",
        path:'/activity',
        component:()=>activity,
    }
]
export { routes };