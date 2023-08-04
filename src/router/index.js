import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SignupView from '../views/signupViews.vue';
import LoginView from '../views/loginViews.vue';
import DashboardView from '../views/DashboardView.vue';
import ProfileView from '../views/ProfileView.vue';
import DashboardHomeView from '../views/DashboardHomeView.vue';
import store from '../store/index';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { requiresAuth: false }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: ProfileView,
        meta: { requiresAuth: true }
      },
      {
        path: 'home',
        name: 'dashboardHome',
        component: DashboardHomeView,
        meta: { requiresAuth: true }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn;

  if (to.meta.isLoggedIn && !isLoggedIn) {
    // If the route requires authentication and the user is not logged in, redirect to the login page.
    next('/login');
  } else if (!to.meta.isLoggedIn && isLoggedIn) {
    // If the route should not be accessible when logged in, and the user is logged in, redirect to the dashboard.
    next('/dashboard');
  } else {
    // Otherwise, allow the navigation to proceed.
    next();
  }
});






export default router

