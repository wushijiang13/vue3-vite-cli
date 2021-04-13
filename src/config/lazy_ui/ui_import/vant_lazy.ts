//这里起别名是为了解决命名一直带来的引入冲突
import { Button as vantButton } from 'vant';
import {app} from '../../vue/app'

// @vue-ignore
app.component(vantButton.name,vantButton);