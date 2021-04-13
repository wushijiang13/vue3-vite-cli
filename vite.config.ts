import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      styleImport({
          libs: [{
              libraryName: 'element-plus',
              resolveStyle: (name:any) => {
                  name = name.slice(3);
                  //name = name.splice(3) 这是官方的按需引入的处理写法,有误。
                  //这里按需引入强调几句
                  // 就是name就是执行了一个截取的方法,但是用法是错的。
                  // name 返回的是string 只需要substr截取下字符串把返回的
                  // el-select 截取成 select 拼接上即可对应上下面链接引入的scss的文件地址了
                  return `element-plus/packages/theme-chalk/src/${name}.scss`;
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
})
