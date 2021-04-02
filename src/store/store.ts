import {createStore} from 'vuex';
const store:any=createStore(
    {
        state(){
            let count:number=0;
            return {
                count,
            }
        },
        mutations:{
            addCount(state:any){
                state.count++;
            }
        },
    }
)

export {store};
