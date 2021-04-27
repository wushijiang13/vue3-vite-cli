import {createStore} from 'vuex';
import {LanginTerval} from '../config/i18n/config/i18n_enum'

const store:any=createStore(
    {
        state(){
            let count:number=0;
            let languages:LanginTerval=LanginTerval.ZH //多语言
            return {
                count,
                languages,
            }
        },
        mutations:{
            addCount(state:any){
                state.count++;
            },
            setLang(state:any,newLang:LanginTerval){
                state.languages = newLang;
            }
        },
    }
)

export {store};
