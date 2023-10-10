import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import SignupView from '../views/signupViews.vue';
import ServicesViews  from '../views/ServicesViews.vue';
import LoginView from '../views/loginViews.vue';
import DashboardView from '../views/DashboardView.vue';
import ProfileView from '../views/ProfileView.vue';
import DashboardHomeView from '../views/DashboardHomeView.vue';
import store from '../store/index';
import NotFoundView from '../views/NotFoundView.vue';




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFoundView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesViews,
    meta: { requiresAuth: false }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { requiresAuth: false }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
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
    next('/login');
  } else if (!to.meta.isLoggedIn && isLoggedIn) {
    
    next('/dashboard');
  } else {
    
    next();
  }
});






export default router

