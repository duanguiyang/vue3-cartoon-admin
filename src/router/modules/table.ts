export default{
    path:"/table",
    name:"table",
    component:()=>import("@/layouts/index.vue"),
    meta:{
        requiresAuth:true,
        name:"表格",
        icon:"icon-tag"
    }
}