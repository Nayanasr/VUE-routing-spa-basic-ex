import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeComp from "./components/HomeComp"
import OfficeComp from "./components/OfficeComp"

let router = createRouter({
    // to remember the previous pages by using browser history
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeComp
        },
        {
            path: '/office',
            component: OfficeComp
        },
    ]
})

let app = createApp(App)
app.use(router)
app.mount('#app')
