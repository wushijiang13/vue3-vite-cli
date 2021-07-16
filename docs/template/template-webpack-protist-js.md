## webpack-protist-js
 ### 啥是webpack-protist-js ?
  此模板创建目的以原生js + css + webpack 为基准，模板创造出发点是自己因为时常使用原生html搭建些 练手的小demo，但是又疲于每次F5刷新的不爽 以及部署时项目并没有混淆代码带来的未知注入危险！
     
  所以一气之下搭建了一个简易的以webpack 热更新原生模板，此模板最大爽点 : 就是入手简单，支持页面热更新，css+js+第三方资源引入热更新，并且使用webpack 带来的高拓展性和安全性的保护！并且带来了
     
  高度的编译后资源分级，保证运行效果及代表打包后的效果！使用webpack5 带来的优化打包及高拓展性。方便你快速入手webpack5 并上手！
       
  实乃是想练手原生css骚操作、js奇淫巧技、以原生开发为主的最好伙伴！
  
  ### 项目引入细节分支
  
  [webpack-protist-js](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.11-beta-webpack-protist-js) :`创建webpack-protist-js 并支持 hot 热更新`  
  
  [0.0.13-bate](https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.13-bate) :`更新模板template-webpack-protist-js 优化打包后目录层级和运行时不一致问题，加入文件名加密，文件混淆压缩`
    
   ### 项目层级
   ::: tip 提示
   此层级为 webpack-protist-js 模板层级
   :::
   ```ts
     |- page //项目页面
     |-  |— index //第一个页面文件
     |-  |—   |— static //资源 包含css + js + 第三方文件 
     |- index.html //页面 html
  ```
 ___
 ### css引入配置
 static 文件夹中 css 为 `当前这个页面的所需的css`  
 index.css 为 `默认样式`
    
 #### 新增
 ```js
    //新增 css 文件，以index.css 为例
     css //css 文件夹中
      |- index.css // 创建 index.css
 ```
   ::: tip 提示
   如需监听新加入的css热更新需要引入到webpack 配置的入口文件中
   :::
   
  ####  监听热更新 在 index.js 
  ```js
    //index.js
   import '../css/index.css';//当模块引入
  ```
 ___
 ### js 引入配置
  static 文件夹中 js 为 `当前这个页面的所需的js`  
  index.js 为 webpack 配置的`入口文件`
     
  #### 新增
  ```js
     //新增 js 文件，以index.css 为例
      js //js 文件夹中
       |- xxx.js // 创建 xxx.js
  ``` 
   #### 使用
   ```js
     //index.js
    import '../js/xxx.js';//当模块引入
   ```
___
 ### 图片等第三方引入
  无需配置任何直接 引入即可，webpack5 配置 html 变化 和 `url-loader` 自动监听 更新
  
 ### 目前包含的webpack5 优化点
 <input type="checkbox" disabled="disabled" checked> 所有`css` 代码提取创建新的 `css` 文件压缩并混淆  
 <input type="checkbox" disabled="disabled" checked> 打包后 会对所有html `css`  `js` `img` 等文件进行压缩和文件名混淆  
 <input type="checkbox" disabled="disabled" checked> 支持 hot 热更新，无刷新更新 `css` `js` `html` `img` 等   
 <input type="checkbox" disabled="disabled" checked> 支持 `babel` 转换 es 语法代码  
 <input type="checkbox" disabled="disabled" checked> 支持 `mode` 区分环境  
 
 
 
## package指令
 ### 启动 dev 环境
 ```js
 "dev": "webpack serve"
```
 ### 启动 prod 环境
 ```js
"prod": "webpack serve --mode=production"
```
 ### 编译
 ```js
 "build": "webpack"
```

  
   