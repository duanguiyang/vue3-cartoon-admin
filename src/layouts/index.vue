<script setup lang="ts">
import Sidertab from "./Sidertab/index.vue"
import { reactive,ref,onMounted ,toRefs} from "vue"; 
import children from "./Sidertab/chidren.vue"




</script>

<template>
  <div class="layout-demo">
  <a-layout style="min-height: 100vh">
    <a-layout>
      <Sidertab></Sidertab>
      <a-layout-sider style="width: 206px; margin-left: 1px;">

      </a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
//   justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>