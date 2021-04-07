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
                  name = name.substr(3,name.length);
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
          }]
      })
  ],
  base:"./",
})
