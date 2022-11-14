export default{
    path:"/perfect",
    name:"perfect",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"完美世界",
        icon:"icon-xigua-color"
    }
}