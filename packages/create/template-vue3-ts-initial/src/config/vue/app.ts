//此文件是声明vue对象树文件，提取出来方便其他ts引入app对象进行注入全局声明等...
import { createApp } from 'vue'
import App from '../../App.vue'

let app = createApp(App);

export {app}