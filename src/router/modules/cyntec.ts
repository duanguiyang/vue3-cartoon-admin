export default{
    path:"/cyntec",
    name:"cyntec",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"武动乾坤",
        icon:"icon-github",
    }
}