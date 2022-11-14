<script setup lang="ts">
import { reactive } from 'vue';
// import { Icon } from '@arco-design/web-vue';
import icon from "@/layouts/Icon/index.vue"
import { useRouter } from 'vue-router';

// const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/font_180975_ue66sq60vyd.js' });

const tabList:Array<any> = reactive([
    {name:"魔道祖师",icon:"icon-bytedance-color",path:"/diabolism"},
    {name:"斗破苍穹",icon:"icon-lark-color",path:"/breaksky"},
    {name:"吞噬星空",icon:"icon-tiktok-color",path:"/starrysky"},
    {name:"完美世界",icon:"icon-xigua-color",path:"/perfect"},
    {name:"斗罗大陆",icon:"icon-alipay-circle",path:"/civillaw"},
    {name:"西行记",icon:"icon-qq-circle-fill",path:'/westing'},
    {name:"星辰变",icon:"icon-codepen",path:'/stars'},
    {name:"武动乾坤",icon:"icon-github",path:'/cyntec'},
    {name:"山河剑心",icon:"icon-qq-zone",path:'/shan'},
    {name:"不良人",icon:"icon-wechat",path:'/badness'},
    {name:"图表",icon:"icon-bar-chart",path:'/chart'},
    {name:"表格",icon:"icon-tag",path:'/table'},
])

//菜单路由跳转
const router = useRouter()

const menuRouter = (path:string)=>{
    router.push(path)
}



</script>

<template>
    <a-layout-spather class="spathertab" :wpathth="130">
        <!-- <div class="spathertab-home">
            <div class="spathertab-content" v-for="(item,index) in tabList" :key="item.path">
                <icon :type="item.icon"/>
                <span>{{item.name}}</span>
            </div>
        </div> -->
    <a-menu theme="dark" class="spathertab-home" :default-selected-keys="[tabList[0].path]" @menu-item-click="menuRouter">
      <a-menu-item v-for="item in tabList" :key="item.path" class="spathertab-content">
        <icon :type="item.icon" />
        <span class="name">{{ item.name }} </span>
      </a-menu-item>
    </a-menu>
    </a-layout-spather>
</template>

<style lang="scss" scoped>
.spathertab{
    background-color: #232324 !important;
    .spathertab-home{
        .spathertab-content{
           display: flex;
           align-items: center;
        }
    }
}

</style>