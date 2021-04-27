import {vueAxios} from '../axios_request'

// 写在前面这是我博客后台中的一个接口，我起的是本地服务。
// 我是跑过没问题，axios的引入，由于后台接口提供的不同。
// 所以建议大家自己封装，我只是引入并且简单封装了一下。
/*获取所有文章*/
const getAllArticleList:Function=(data:object):Promise<object>=>{
    return vueAxios.post('/article/getArticleList',data)
}

export {getAllArticleList}
