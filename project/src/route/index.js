import { createRouter, createWebHistory } from 'vue-router'
import routers from './modules/index'

const router = new createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router