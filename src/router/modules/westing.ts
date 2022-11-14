export default{
    path:"/westing",
    name:"westing",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"西行记",
        icon:"icon-qq-circle-fill"
    }
}