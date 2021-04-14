import axios from 'axios'

const vueAxios=axios.create({
    baseURL:"http://localhost:3000",
    timeout: 30000,
    headers:{
        "Content-Type":"application/json",
    },
})
vueAxios.interceptors.response.use( response => Promise.resolve(response.data))

export {vueAxios};
