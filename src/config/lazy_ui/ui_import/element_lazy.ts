import {ElButton,ElPagination,locale} from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn'
import {app} from '../../vue/app'
// @vue-ignore
locale(lang);
[ElButton,ElPagination].forEach(component => {
    app.component(component.name, component)
})


