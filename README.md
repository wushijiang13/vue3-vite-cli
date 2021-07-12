<p align="center">
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
               <img width="100" src="https://vitejs.dev/logo.svg" alt="Vite logo">
      </a>
       <a href="https://www.tslang.cn/" target="_blank" rel="noopener noreferrer">
                 <img width="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="Ts logo">
               </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/vite-vue3-cli">
        <img src="https://img.shields.io/badge/npm-0.0.10-brightgreen.svg" alt="npm">
    </a>
    <a href="https://github.com/vuejs/vue-next">
        <img src="https://img.shields.io/badge/vue3-3.0.5-brightgreen.svg" alt="vue">
    </a>
    <a href="https://github.com/element-plus/element-plus">
        <img src="https://img.shields.io/badge/elementPlus-1.0.2beta.40-brightgreen.svg" alt="element-plus">
    </a>
    <a href="https://github.com/vitejs/vite">
        <img src="https://img.shields.io/badge/vite-2.2.1-brightgreen.svg" alt="vite">
    </a>
    <a href="https://github.com/microsoft/TypeScript">
        <img src="https://img.shields.io/badge/typescript-4.1.3-brightgreen.svg" alt="typescript">
    </a>
    <a href="https://github.com/vueComponent/ant-design-vue">
        <img src="https://img.shields.io/badge/antDesignVue-2.1.2-brightgreen.svg" alt="ant-design-vue">
    </a>
    <a href="https://github.com/youzan/vant">
        <img src="https://img.shields.io/badge/vant-3.0.13-brightgreen.svg" alt="vant">
    </a>
    <br/>
    <a href="https://github.com/axios/axios">
        <img src="https://img.shields.io/badge/axios-0.21.1-brightgreen.svg" alt="axios">
    </a>
    <a href="https://github.com/intlify/vue-i18n-next">
        <img src="https://img.shields.io/badge/vueI18n-9.1.6-brightgreen.svg" alt="vue-i18n-next">
    </a>
    <a href="https://github.com/kentcdodds/cross-env">
        <img src="https://img.shields.io/badge/crossEnv-7.0.3-brightgreen.svg" alt="cross-env">
    </a>
    
</p>

# Based on vite style scaffolding, provide a variety of templates to more efficiently solve business needs!  

<a href="http://wushijiang.cn/vue3-vite-cli/">中文文档</a>  
 
![image](https://user-images.githubusercontent.com/38801556/125270634-6eb79500-e33c-11eb-89d1-597f8c21f53c.png)

## 国内下载传送门🎉

<a href="https://gitee.com/wushijiang13/vue3-vite-cli">码云</a>  


## 分支目录
    
<ul>
    <li>
    <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.1-vue-router">0.0.1-vue-router</a> >  引入了vue-router4
    </li>
    <li>
    <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.2-vuex">0.0.2-vuex</a> > 引入了vuex4
    </li>
    <li>
    <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.3-element-plus">0.0.3-element-plus</a> > 按需引入element plus
    </li>
    <li>
    <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.4-ant-design-vue">0.0.4-ant-design-vue</a> > 按需引入ant-design-vue
    </li>
    <li>
    <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.5-vant">0.0.5-vant</a> > 按需引入 vant v3
    </li>
     <li>
     <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.6-axios">0.0.6-axios</a> > 引入了axios
     </li>
     <li>
     <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.7-vue-i18n">0.0.7-vue-i18n</a> > 引入了vue-i18n
     </li>
      <li>
      <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.8-pack-more">0.0.8-pack-more</a> > 项目结构修改为多模块打包机制。
       <p style="color: red;">特别说明：0.0.8-pack-more 此分支是按照vite官方的创建.env.xx文件的方式注入的环境变量，考虑到后续模块过多，需创建过于多的env文件。项目改为 cross-env 注入环境变量的方式区分。  
       <br/>（此分支仅供学习，不推荐使用此方法注入！并且模板后续不根据此方法注入环境变量！！！）</p>  
      </li>
       <li>
       <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.9-cross-env">0.0.9-cross-env</a> > 项目结构修改为cross-env多模块打包机制。
       <p>项目后续会根据corss-env引入环境变量特此注明，为了项目的简洁性以及命令注入的方便后续更新都采用此方法注入环境变量！</p>
     </li>
     <li>
     <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.10-beta">0.0.10-beta</a> > 项目结构修改，并且支持npm下载项目,并选择模板。
     </li>
     <li>
     <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.11-beta-webpack-protist-js">0.0.11-beta-webpack-protist-js</a> > 项目加入新的模板项目 新加入的为原生html+js+css+webpack组成的页面
     <br/>热更新原生页面！项目支持多页面热更新，方便原生小页面的打包到环境配置的问题。
     </li>
      <li>
      <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.12-stables">0.0.12-stables</a> > 
       更新模板template-webpack-protist-js 优化打包后目录层级和运行时不一致问题，加入文件名加密，文件混淆压缩。 <br/>
       修复模板template-webpack-protist-js 运行时目录层级无法找到对应的文件问题。 <br/>
       create-cli指令中加入 execa 自动检查模板环境下载对应依赖。 <br/>
       docs 官方文档中对模板修改和webpack优化项加入说明！ <br/>
       移除了下载完毕后的小狗头。<br/>
       0.0.12-stables 正式版 🎉🎉🎉 上线！<br/>
      </li>
     
</ul> 

详情可切换分支查看，所有分支都通过了编译测试。

项目截图：  

![image](https://user-images.githubusercontent.com/38801556/115701761-b01e5100-a39a-11eb-856c-f4f1b02d8c2c.png)
![image](https://user-images.githubusercontent.com/38801556/115701661-98df6380-a39a-11eb-8b23-891e38510b68.png)
![image](https://user-images.githubusercontent.com/38801556/115701833-c9bf9880-a39a-11eb-8dba-ee479cab71aa.png)

2021-4-22 0.0.8-pack-more 更新日志:  
<ul>
    <li>新增多模块打包机制，只需根据vite的注入环境变量模式，编写好相关打包dev和build命令，即可创建模块使用。</li>
    <li>更新element plus 内部组件默认为英语的问题，以及相关内部多语言切换的问题，已提交<a href="https://github.com/element-plus/element-plus/issues/1883">issues</a>等待官方调整适配，如果其他element 切换问题请查看<a href="https://github.com/element-plus/element-plus/issues/1883">issues</a></li>
</ul>
2021-4-27 0.0.10-beta 更新日志:
<ul>
    <li>修改目录层级并支持npm安装项目</li>
    <li>增加第一个模板template-vue3-ts-initial(最初的模板)</li>
</ul>
2021-5-19 0.0.11-beta-webpack-protist-js 更新日志:
<ul>
    <li>增加第二个模板template-webpack-protist-js 由html+css+js+webpack支持多页面热更新，方便原生页面保护混淆等</li>
    <li>create-cli指令中加入template-webpack-protist-js支持</li>
</ul>
2021-7-12 0.0.12-stables 更新日志:
<ul>
    <li>更新模板template-webpack-protist-js 优化打包后目录层级和运行时不一致问题，加入文件名加密，文件混淆压缩</li>
    <li>修复模板template-webpack-protist-js 运行时目录层级无法找到对应的文件问题。</li>
    <li>create-cli指令中加入 execa 自动检查模板环境下载对应依赖</li>
    <li>docs 官方文档中对模板修改和webpack优化项加入说明！</li>
    <li>移除了下载完毕后的小狗头😭</li>
    <li>0.0.12-stables 正式版 🎉🎉🎉 上线！</li>
</ul>


## 快速使用

```
 # 下载依赖
 npm i vite-vue3-cli -g
 
 # 创建项目
 create-cli
```

## License

MIT

