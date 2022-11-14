export default{
    path:"/shan",
    name:"shan",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"山河剑心",
        icon:"icon-qq-zone"
    }
}