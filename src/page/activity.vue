<template>
    <div class="activity">
         {{allText}}
         计数器：{{store.state.count}}
        <button @click="addCount">点击加1</button>
    </div>
</template>

<script lang="ts">
    import {useStore} from 'vuex';
    import {defineComponent} from 'vue';
    export default defineComponent({
        name: "activity",
        setup(){
            let store:any=useStore();

            function addCount():void{
                store.commit('addCount');
            }

            return {
                store,
                addCount,
            }
        },
    })
</script>

<style scoped>

</style>