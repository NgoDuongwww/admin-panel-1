/**
 * @module router
 * @description Cấu hình Vue Router cho ứng dụng, bao gồm các route cho phần admin và public.
 */
import { createWebHistory, createRouter } from 'vue-router'
// ↳ createRouter: Hàm để tạo một router instance.
// ↳ createWebHistory: Hàm để tạo một history bộ nhớ, nghiệm cơ bản là URL hành đồng của trang web.

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboardView.vue'),
        },
        {
          path: 'purchase',
          component: () => import('@/views/purchaseView.vue'),
        },
      ],
    },
  ],
})

export default router
