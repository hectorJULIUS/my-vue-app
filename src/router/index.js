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
import QuotationView from '../views/QuotationView.vue'
import UserList from '../views/UserList.vue'; 
import CreateUser from '../views/CreateUser.vue'; 
import EditUser from '../views/EditUser.vue'; 
import AdminView from '../views/AdminView.vue'; 
import ClientView from '../views/ClientView.vue'; 




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    component: AdminView,
    name: 'admin',
    children: [
      {
        path: 'users',
        name: 'adminUsers',
        component: UserList,
      },
      {
        path: 'create',
        name: 'adminCreateUser',
        component: CreateUser,
      },
      {
        path: '/transactions',
        name: 'adminEditUser',
        component: EditUser,
      },
     
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFoundView,
    meta: { requiresAuth: true },
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
        path: 'quotation',
        name: 'quotation',
        component: QuotationView,
        meta: { requiresAuth: true }
      },
      {
        path: 'client',
        name: 'client',
        component: ClientView,
        meta: { requiresAuth: true }
      },
      {
        path: 'payment',
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

