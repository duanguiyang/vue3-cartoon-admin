<script setup lang="ts">
import { onMounted, onUpdated,defineProps,onBeforeUpdate} from 'vue';
defineProps({data:String})

onMounted(()=>{
    console.log("挂载");
})
onBeforeUpdate(() => {
    console.log("更新前");
})
onUpdated(() => {
    console.log("页面更新hou");
}) 
</script>

<template>
    <div>
        {{data}}
    </div>
</template>

<style lang="scss" scoped>

</style>