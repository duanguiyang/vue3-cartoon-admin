import {createRouter , createWebHashHistory,RouteRecordRaw } from "vue-router"
import login from "./modules/login"
// import home  from "./model/home"
// 导入所有router
const metaRouters: any = import.meta.glob('./modules/*.ts', { eager: true, import: 'default' })
// 处理路由
export const routerArray: RouteRecordRaw[] = Object.keys(metaRouters).map((key) => metaRouters[key] || {})


const routes : Array<RouteRecordRaw> =[
   {
    path:"/",
    name:"app",
    // component:()=> import("@/App.vue"),
    redirect:"home"
   },
   ...routerArray,
   login,
  //  home
]


const router  =createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  const token =localStorage.getItem("token")
    if(to.path === '/' && token !== "true") {
      next({ path: '/login' })
    } else {
      next()
    }
 })

export default router

