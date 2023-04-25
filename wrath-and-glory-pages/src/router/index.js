import { createWebHistory, createRouter } from "vue-router";
import Welcome from '../pages/Welcome.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/aboutGilead',
            name: '',
            component: () => import('../pages/AboutGilead.vue')
        },
    ]
})

export default router
