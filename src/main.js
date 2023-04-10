import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/index',
            name: 'Home',
            component: HelloWorld
        }
    ]
})

createApp(App).use(ElementPlus).use(router).mount('#app')

