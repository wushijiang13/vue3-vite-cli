import axios from 'axios'
import {baseUrl} from './api/api_config'


const vueAxios=axios.create({
    baseURL:baseUrl,
    timeout: 30000,
    headers:{
        "Content-Type":"application/json",
    },
})
vueAxios.interceptors.response.use( response => Promise.resolve(response.data))

export {vueAxios};
