## vue3-ts-initial
 ### 啥是vue3-ts-initial ?
 此模板创建目的本是练习使用尤哥推荐的Vite 后续逐渐想搞一套方便使用的脚手架。所有内部引入细节在 [github](https://github.com/wushijiang13/vue3-vite-cli) 均有分支细节依次引入教程
 以及一些踩坑记录和解决方案。
 
 以Vite + Vue3 + Ts 搭建的框架，模板原型是Vite 中的 `Vue3 + Ts` 模板，内部加入多种UI库的按需引入分层，
 并将Vue对象全局化。支持多模块打包，`coress-env` 指令式环境变量注入 , 支持多语言引入。一键下载内部标有详细说明文件进行分层解释。  
    
 想要尝试 Vite 和 Vue3 以及 Ts 小伙伴，此乃入门项目最简易最容易上手的学习并使用的项目模板！ 
 
 ### 项目引入细节分支
 [vue-router](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.1-vue-router) :`引入 vue-router，并简单使用`
 
 [vuex](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.2-vuex) :`引入 vuex,测试更新`
 
 [element-plus](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.3-element-plus) :`按需引入 element-plus，并且分层 main.js 只需引入js 即可, 解决ts静态检查bug`
 
 [ant-design-vue](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.4-ant-design-vue) :`按需引入 ant-design-vue`
 
 [vant](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.5-vant) :`按需引入 vant`
 
 [axios](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.6-axios) :`axios 引入分层，并加入api list 管理所有请求接口`
 
 [vue-i18n](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.7-vue-i18n) :`引入vue-i18n 多语言，支持切换中英`

 [pack-more](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.8-pack-more) :`项目层级修改成多模块，可模块启动也可全局加载。支持多模块打包,使用 vite 官方推荐 env 文件注入环境变量方式`
  
 [cross-env](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.9-cross-env) :`由于考虑到后续模块过多更换成cross-env 注入环境变量，移除env 文件`
 
 [finally](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.10-beta) :`将项目层级修改为模板层级，整体模板上传至npm，并且支持指令式下载，借鉴 vite 项目架构`
   
  ### 项目层级
  ::: tip 提示
   此层级为 vue3-ts-initial 模板层级
  :::
  ```ts
    |- public //静态资源
    |- src //项目目录
    |-  |— assets //第三方资源
    |-  |— config //配置文件
    |-  |—   |— i18n //多语言
    |-  |—   |— lazy_ui //所有ui库的集合，导入一个ts 直接引入到main
    |-  |—   |— request_lib //所有网络库以及api list都应放到里面最后直接引入api list 返回的变量调用接口即可
    |-  |—   |— vue //由于vue3可创建多个vue父对象，并没有实现全局vue 方便vue2 开发习惯，将vue对象共享
    |-  |— module //多模块文件，内部包含一个个模块，分为 路由 + 组件 单独拆分开是为了 多环境需要的话，直接单独打包模块 H5兼容，在最外层的router config里直接导入多模块路由即可拼成整个项目 
    |-  |— page //共享父组件，或者通用组件页面等，都可放入。运行后会在整个项目中体现。
    |-  |— router //路由配置 可通过环境变量区分打包路由包含哪些模块
    |-  |— store //vuex 通用状态管理
    |- App.vue //公用最外层父组件
    |- global.d.ts //ts 拓展this 声明文件。如不需要忽略即可
    |- main.ts //入口文件
    |- shims-vue.d.ts //vue文件，第三方文件声明文件。
 ```
___
### UI库配置
   lazy_ui 文件夹中 ui_import 为 `所有组件库的按需导入`  
   lazy_ui.ts 为 `统一引入`
   
   #### 新增UI库 以ant-design-vue 为例
   ```ts
    ui_import //加入 ant ui库
     |- ant_lazy.ts //ant-design-vue 库
```
  ::: tip 提示
  内部引入按照UI库官方文档按需引入即可！
  :::
  
   #### 在 vite.config 中按需加载样式
   ```ts
   //vite.config.ts 
   {
          libraryName: 'ant-design-vue',
          resolveStyle: (name:any) => {
               return `ant-design-vue/es/${name}/style/index.css`;
          },
          resolveComponent: (name) => {
               return `ant-design-vue/es/${name}/index.js`;
          },
   },
   ```
___
 ### 网络请求配置
   request_lib 文件夹中 api -> api_list 为 `所有接口整合`  
   api_config.ts 为 `api的请求地址,根据环境变量判断`  
   axios_request.ts 为 `axios 的简单封装，后续根据自己需求，自行封装`
   
   #### 新增接口 api  以 getAllArticleList 获取文章list 为例
   ```ts
    request_lib 
     |- api 
     |-  |- api_list.ts //在此加入
```
  ::: tip 提示
   根据 axios 封装默认返回一个promise的接口请求结果，如果不了解promise，请先学习ES6！
  :::
  
   #### 在api_list.ts 使用 post
   ```ts
   //api_list.ts 
   const getAllArticleList:Function=(data:object):Promise<object>=>{
       return vueAxios.post('/article/getArticleList',data)
   }

   export {getAllArticleList}
   ```
  ::: tip 提示
   如需get请求 将 `vueAxios.post` 更换成.get即可
  :::
  
___
   ### 多语言配置
   i18n 文件夹中 config 为 `i18n_enum.ts` 为支持的语言类型枚举  
   language_pack 文件夹中为 `所有语言包以及合并导出一个多语言包`
   
   #### 新增语言
   ```ts
    language_pack
     |- xxx.ts //语言包
     |- i18n_message.ts //导出整合包
```
   #### 以en为例使用 en.ts
   ```ts
   //en.ts 
   const en:{}={
           index:{
               jumps:'Jump',
               defaultBtn:"Default button",
               elementTitle:"Element-Plus use"
           }
       }
       
   export {en}
    
   //i18n_message.ts
    import {en} from './en'
    const messages:{}={
        en,
    }

   //i18n_enum.ts
   export  const enum LanginTerval {
       EN='en'
   }
   ```
___
   ### 环境变量使用
   由于使用corss-env 注入，所以不需要 import.xxx的vite 官方注入方式。因为此方法不支持在vite.config中直接获取使用，需项目启动后在组件中才能获取，失去了便捷性。
   
   #### 注入
   ```js
    cross-env VITE_ROOT_URL=./src/module/module1  vite
    //corss-env 环境变量名 = 值 vite启动项
```
   #### 使用
   ```ts
    process.env.VITE_ROOT_URL
   ```
    
    
  
## 进阶使用  
  
  ### 多模块化构建配置
  一般业务相对不复杂的项目用不到此项。此项配置适用于某些模块资源和现有项目有复用向并且疲于重新搭建项目引入开发，或需要将模块抽离单独打包时做出的修改
  ::: tip 如不需要模块化
  如果不需要模块化构建，可删除module文件夹，并且在router 文件夹中删除对应的 模块引入即可！
  :::
  
  #### 创建
  ```ts 
    //在model 文件夹内部创建 一个模块文件夹 以model1为例
    module1
        |- page  //组件页面
        |- router //路由配置
        |- index.html //打包需要，内部可自定义
        |- main.ts  //模块入口文件
    //内部创建index.html 的原因是为了打包时 直接同级查找打包，并且模块可以单独对 模块index.html 进行配置
```
 #### 使用
 一般区分模块启动还是整个项目启动，依赖于环境变量的配置而加载不同的入口文件从而达到 `解耦管理`
 ```ts
   //此项目我已 VITE_ROOT_URL 为注入项来区分启动哪个入口文件。
   "dev:module1": "cross-env VITE_ROOT_URL=./src/module/module1 VITE_MODULE_NAME=module1 vite"
   //指令名 :  模块入口文件地址  模块名 vite 启动
```
 ## package指令
 ### 启动
 ```js
 "dev": "vite", //启动整个项目
 "dev-prod": "vite --mode production",//启动整个项目的正式环境
 "dev:module1": "cross-env VITE_ROOT_URL=./src/module/module1 VITE_MODULE_NAME=module1 vite", //启动model1模块
```
 ### 编译
 ```js
 "build": "vue-tsc --noEmit --skipLibCheck && vite build",//ts 检查 忽略 node_modules 检查，并且 build 整个项目
```

  
  
    
   
   
   
   
   
   