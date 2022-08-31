## vue3-google-Extensions
 ### vue3-google-Extensions ?
此模板，根据 `Vue-Cli` 搭建的谷歌插件方案（`Vue2`和`V2`标准），升级而成，并以`Google Extensions V3` 版本为默认版本。

此模板修复了 从`Vue2` 升级到 `Vue3` 带来的写法和解析问题，并且将`V3` 常规开发版本，并修复打包兼容问题，规避掉，并支持打包后自动生成`zip`方便开发后直接上传到
`Google` 插件商店审核。
    
### 为何会诞生它

因为现在最常见的 `Google Extensions` 都是 `Vue2` 版本的，并且大多数`Demo` 都是 遵循`Google Extensions V2` 插件规则开发的。
并且 `Google Extensions`文档，十分不友好，对于升级和打包后的问题，常常无处查询。因此有了此模板，方便 `V2` 项目升级 `V3`，避免调整`Webpack`打包规则，并支持 `Vue3` 
多种简化语法。

 ## package指令
 ### 启动
 ```js
  "build-watch": "vue-cli-service build-watch",//调试项目
```
 1. Google 浏览器打开 开发者模式  
 2. 找到扩展程序 加载已有程序，将打包后的 生成文件夹选中  
 3. 出现 "xxx" 插件 ，固定到导航栏中  
 4. 点击查看效果吧  
 ### 编译
 ```js
 "build-zip": "vue-cli-service build &&  node scripts/build.zip.js" //build 并生成可上传google插件商店的zip包
```

### Google Extensions  开发文档
[传送门](https://developer.chrome.com/docs/extensions/)

  
  
    
   
   
   
   
   
   