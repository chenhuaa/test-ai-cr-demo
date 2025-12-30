import { createApp, App as Application } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import router from './router'
import App from './App.vue'

let instance: Application | null = null

const pinia = createPinia()
instance = createApp(App)

instance.use(router).use(pinia).use(ElementPlus, { locale }).mount('#app')