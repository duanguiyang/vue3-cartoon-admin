export default{
    path:"/stars",
    name:"stars",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"星辰变",
        icon:"icon-codepen"
    }
}