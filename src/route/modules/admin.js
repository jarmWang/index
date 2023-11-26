const router = [{
    path: '/',
    name: 'Dashboard',
    component: () => import('@/pages/admin/index.vue'),
    meta: { title: '首页', icon: 'dashboard' }
}]
export default router