//根据运行环境变量 配置项目请求url

//第一个参数 配置测试环境地址 第二个是正式地址
//此地址为我瞎写的正式的地址，到时候修改成你生产环境即可
const baseUrl:string = import.meta.env.MODE === "development" ?
    "http://localhost:3000" : "http://baidu.com"

export {baseUrl}