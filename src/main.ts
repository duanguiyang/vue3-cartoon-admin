import { createApp } from 'vue'
// import './style.css'
import router from "./router/index"
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'; //arco组件库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css';



const app = createApp(App)

app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.mount('#app')
