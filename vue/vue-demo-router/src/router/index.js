import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView"
import AboutView from "../views/AboutView"

// 配置信息中需要页面的相关配置
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "home",
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
