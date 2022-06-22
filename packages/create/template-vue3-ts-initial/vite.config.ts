import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver,VantResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default () => {
    //由于vite 中不支持在配置文件中获取import.meta的环境变量的注入，所以使用此种方法提前获取。详情查看
    const VITE_ROOT_URL=process.env.VITE_ROOT_URL;
    return {
            root:VITE_ROOT_URL != undefined ? VITE_ROOT_URL : '', //根据注入的环境变量判断项目加载启动url
            plugins: [
                vue(),
                styleImport({
                    libs: [ {
                        libraryName: 'ant-design-vue',
                        resolveStyle: (name:any) => {
                            //这里我没有引入less的css 文件因为我已经安装过了sass 不想重复安装一个预编译器。
                            //如果您的项目只需要ant 或者 两者都需要，请使用less。
                            return `ant-design-vue/es/${name}/style/index.css`;
                        },
                        resolveComponent: (name) => {
                            return `ant-design-vue/es/${name}/index.js`;
                        },
                    }
                    ]
                }),
                AutoImport({
                    resolvers: [ElementPlusResolver()],
                }),
                Components({
                    resolvers: [ElementPlusResolver(),VantResolver()],
                }),
            ],
            base:"./",
        }
}

