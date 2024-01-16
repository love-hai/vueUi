import {createRouter} from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

export const router = createRouter({
    routes: [
        {
            path: '/index',
            name: 'Home',
            component: HelloWorld
        }
    ]
})


