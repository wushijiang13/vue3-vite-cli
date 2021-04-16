//这里之所以设置空对象作为静态类型是因为，现在版本的messages的源码的静态验证就是{}
//所以这样判断。
import {en} from './en'
import {zh} from './zh'

const messages:{}={
    en,
    zh,
}

export {messages}