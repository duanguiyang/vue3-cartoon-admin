export default{
    path:"/civillaw",
    name:"civillaw",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"斗罗大陆",
        icon:"icon-alipay-circle"
    }
}