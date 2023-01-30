import { createRouter, createWebHistory } from 'vue-router';
import Error404 from '../views/Error404View.vue';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes = [
  { 
    path: '/:pathMatch(.*)*', 
    name: '404', 
    component: Error404, 
  },
 /*  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  }, */

  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
 
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
