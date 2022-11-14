export default{
    path:"/badness",
    name:"badness",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"不良人",
        icon:"icon-wechat"
    }
}