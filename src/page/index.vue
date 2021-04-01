<template>
    <div class="index">
        {{msg}}
    </div>
</template>

<script lang="ts">
    import {ref,defineComponent} from 'vue';
    export default defineComponent ({
        name:"index",
        setup(){
            let msg:string=ref('Hello Vue 3 + TypeScript + Vite,这是首页').value;
            return{
                msg,
            }
        },
    })
</script>

<style scoped>

</style>