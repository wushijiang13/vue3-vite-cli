<template>
    <div>
        {{content}} 哈哈哈
    </div>
</template>

<script>
    import {ref} from 'vue';
    export default {
        name: "module1Index",
        setup(){
            let content=ref('这是一个模块的首页');
            return {
                content,
            }
        }
    }
</script>

<style scoped>

</style>