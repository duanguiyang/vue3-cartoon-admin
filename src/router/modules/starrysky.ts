export default{
    path:"/starrysky",
    name:"starrysky",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"吞噬星空",
        icon:"icon-tiktok-color"
    }
}