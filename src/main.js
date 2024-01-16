import { createApp } from 'vue'
import HomePage from './Home.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {router} from './router'

createApp(HomePage).use(ElementPlus).use(router).mount('#app')

