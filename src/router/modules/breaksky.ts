export default{
    path:"/breaksky",
    name:"breaksky",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"斗破苍穹",
        icon:"icon-lark-color"
    }
}