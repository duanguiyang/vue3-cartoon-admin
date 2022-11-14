export default{
    path:"/diabolism",
    name:"diabolism",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"魔道祖师",
        icon:"icon-bytedance-color"
    }
}