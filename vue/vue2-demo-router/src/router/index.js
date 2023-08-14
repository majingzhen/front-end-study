import { createRouter, createWebHistory} from 'vue-router'
import HomeView from "../views/HomeView.vue";

const routes  = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [
      // 定义您的路由配置
    ],
  })

export default router;