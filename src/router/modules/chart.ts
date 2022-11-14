export default{
    path:"/chart",
    name:"chart",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"图表",
        icon:"icon-bar-chart"
    }
}