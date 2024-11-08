<!--- 变更日志 -->
## 1.0.2 (2024-11-4)
-  加入workflows 自动部署github pages

## 1.0.1 (2023-3-24)
-  将默认包管理器 统一修改成 `pnpm`、 加入`tempalte-vue3-ts` 干净模版

## 1.0.0 (2022-9-26)
-  `template-vue3-ts-initial` 模板，所有依赖升级到最新，`vite`更新到`3.x`。

## 0.2.2 (2022-9-1)
-  加入`template-vue3-google-Extensions` 模板，基于Vue3 开发V3 版本 google 插件

## 0.0.21 (2022-4-20)
-  加入`template-node-js-demo` 模板，方便在node端运行js demo
- `template-node-js-demo`、`template-vue3-ts-initial`、`template-webpack-protist-js` 更新为pnpm包管理器
- `template-webpack-protist-js` 加入 `friendly-errors-webpack-plugin` 优化日志错误输出
- `template-webpack-protist-js` 修改模板初始页面样式


## 0.0.13
<ul>
    <li>  更新模板template-webpack-protist-js 优化打包后目录层级和运行时不一致问题，加入文件名加密，文件混淆压缩。 </li>
    <li>  修复模板template-webpack-protist-js 运行时目录层级无法找到对应的文件问题 </li>
    <li>  create-cli指令中加入 execa 自动检查模板环境下载对应依赖 </li>
    <li>  docs 官方文档中对模板修改和webpack优化项加入说明！ </li>
    <li>  移除了下载完毕后的小狗头。 </li>
</ul>

## 0.0.11
<ul>
    <li>  项目加入新的模板项目 新加入的为原生html+js+css+webpack组成的页面 </li>
    <li>  热更新原生页面！项目支持多页面热更新，方便原生小页面的打包到环境配置的问题 </li>
</ul>

## 0.0.10
<ul>
    <li>  项目结构修改，并且支持npm下载项目,并选择模板 </li>
</ul>

## 0.0.9
<ul>
    <li>  项目结构修改为cross-env多模块打包机制。 </li>
</ul>

## 0.0.8
<ul>
    <li>  项目结构修改为多模块打包机制 </li>
    <li>  <p style="color: red;">特别说明：0.0.8-pack-more 此分支是按照vite官方的创建.env.xx文件的方式注入的环境变量，考虑到后续模块过多，需创建过于多的env文件。项目改为 cross-env 注入环境变量的方式区分。  
                 <br/>（此分支仅供学习，不推荐使用此方法注入！并且模板后续不根据此方法注入环境变量！！！）</p>   </li>
</ul>

## 0.0.7-vue-i18n
<ul>
    <li> 引入了vue-i18n </li>
</ul>

## 0.0.6-axios
<ul>
    <li> 引入了axios </li>
</ul>

## 0.0.5-vant
<ul>
    <li> 按需引入 vant v3 </li>
</ul>


## 0.0.4-ant-design-vue
<ul>
    <li> 按需引入ant-design-vue </li>
</ul>

## 0.0.3-element-plus
<ul>
    <li> 按需引入element plus</li>
</ul>

## 0.0.2-vuex
<ul>
    <li> 引入了引入了vuex4</li>
</ul>

## 0.0.1-vue-router
<ul>
    <li> 引入了vue-router4</li>
</ul>
