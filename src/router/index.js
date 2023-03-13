import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import ('../views/HomeView.vue'),
    },
    {
      path: "/counter",
      name: "Counter",
      component: () => import ('../views/CounterView.vue'),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import ('../views/NotFound.vue'),
    },
  ]
})

export default router
