<p align="center">
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
               <img width="100" src="https://vitejs.dev/logo.svg" alt="Vite logo">
      </a>
       <a href="https://www.tslang.cn/" target="_blank" rel="noopener noreferrer">
                 <img width="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="Ts logo">
               </a>
</p>

<p align="center">
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
</p>

# Vue3 + Vite + Typescript

基于vue3 + vite + ts  开发   

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


## 运行

```
 # 进入项目目录
 cd vite-vue3-cli 
 
 # 下载依赖
 npm i

 # 运行项目
 npm run dev
```
