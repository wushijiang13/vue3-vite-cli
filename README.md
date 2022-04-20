<p align="center">
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
               <img width="300" src="https://vitejs.dev/logo.svg" alt="Vite logo">
      </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/vite-vue3-cli">
        <img src="https://img.shields.io/badge/version-0.0.10-brightgreen.svg" alt="npm">
    </a>
</p>

<h1 align="center">Vue3-Vite-Cli</h1>
<p align="center">Based on vite style scaffolding</p>
<p align="center">provide a variety of templates to more efficiently solve business needs!</p>

## Status 

Continually updated...

## Documentation
For details, see <a href="https://wushijiang.cn/vue3-vite-cli/"> documentation </a>  

## Branch description
    
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
      <a href="https://github.com/wushijiang13/vue3-vite-cli/tree/0.0.13-bate">0.0.13-bate</a> > 
       更新模板template-webpack-protist-js 优化打包后目录层级和运行时不一致问题，加入文件名加密，文件混淆压缩。 <br/>
       修复模板template-webpack-protist-js 运行时目录层级无法找到对应的文件问题。 <br/>
       create-cli指令中加入 execa 自动检查模板环境下载对应依赖。 <br/>
       docs 官方文档中对模板修改和webpack优化项加入说明！ <br/>
       移除了下载完毕后的小狗头。<br/>
       0.0.13-bate 正式版 🎉🎉🎉 上线！<br/>
      </li>
     
</ul> 

详情可切换分支查看，所有分支都通过了编译测试。

## Screenshot：  

### vue3-ts-initial

![image](https://user-images.githubusercontent.com/38801556/115701761-b01e5100-a39a-11eb-856c-f4f1b02d8c2c.png)

### webpack-protist-js

![image](https://user-images.githubusercontent.com/38801556/164145946-a802d51b-c537-41a8-8ae6-7b560a19dd9e.png)


## Get Started

```
 # 下载依赖
 npm i vite-vue3-cli -g

 # 更新版本
 npm update vite-vue3-cli -g

 # mac 确保使用管理员权限下载
 sudo npm i -g vite-vue3-cli --unsafe-perm=true 
 
 # 创建项目
 create-cli 
```

## Help
 
 gitee backup 👉 <a href="https://gitee.com/wushijiang13/vue3-vite-cli">码云</a>  

## License

<a href="https://github.com/wushijiang13/vue3-vite-cli/blob/master/LICENSE">MIT</a>