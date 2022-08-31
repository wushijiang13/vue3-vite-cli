<template>
 <WuIcon :type="icon" class="wu-icon"/>
</template>


<script>
import { createFromIconfontCN } from '@ant-design/icons-vue';

//使用cdn 会涉及到安全策略问题，暂时先本地引入
const WuIcon = createFromIconfontCN({
  scriptUrl: './iconfont.js', // 在 iconfont.cn 上生成
});

export default {
  props:['icon'],
  components:{
    WuIcon
  }
};
</script>
<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
</style>