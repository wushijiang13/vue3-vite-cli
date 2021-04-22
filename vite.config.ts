import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
//获取 vite 中的import的环境变量
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({mode}) => {
    //由于vite 中不支持在配置文件中获取import.meta的环境变量的注入，所以使用此种方法提前获取。详情查看
    const VITE_ROOT_URL=loadEnv(mode,process.cwd()).VITE_ROOT_URL;
    if (mode != undefined) {
        return {
            root:VITE_ROOT_URL != undefined ? VITE_ROOT_URL : '', //根据注入的环境变量判断项目加载启动url
            plugins: [
                vue(),
                styleImport({
                    libs: [{
                        libraryName: 'element-plus',
                        esModule:true,
                        ensureStyleFile:true,
                        resolveStyle: (name:any) => {
                            name = name.slice(3);
                            console.log(name);
                            return `element-plus/packages/theme-chalk/src/${name}.scss`;
                            //name = name.splice(3) 这是官方的按需引入的处理写法,有误。
                            //这里按需引入强调几句
                            // 就是name就是执行了一个截取的方法,但是用法是错的。
                            // name 返回的是string 只需要substr截取下字符串把返回的
                            // el-select 截取成 select 拼接上即可对应上下面链接引入的scss的文件地址了
                        },
                        resolveComponent: (name) => {
                            return `element-plus/lib/${name}`;
                        },
                    }, {
                        libraryName: 'ant-design-vue',
                        resolveStyle: (name:any) => {
                            //这里我没有引入less的css 文件因为我已经安装过了sass 不想重复安装一个预编译器。
                            //如果您的项目只需要ant 或者 两者都需要，请使用less。
                            return `ant-design-vue/es/${name}/style/index.css`;
                        },
                        resolveComponent: (name) => {
                            return `ant-design-vue/es/${name}/index.js`;
                        },
                    }, {
                        libraryName: 'vant',
                        resolveStyle: (name:any) => {
                            //这里less和上面说明一样
                            return `vant/es/${name}/index.css`;
                        },
                        resolveComponent: (name) => {
                            return `vant/es/${name}/index.js`;
                        },
                    },
                    ]
                })
            ],
            base:"./",
        }
    }
}

