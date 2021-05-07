import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login', 
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta:{ guestOnly: true}
  },
  {
    path:'/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    meta:{ guestOnly: true}
  },
  {
    path:'/test',
    name: 'RegTestister',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    meta:{ authOnly: true}
  },
  {
    path:'/forgot-password',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue'),
    meta:{ guestOnly: true}
  },
  {
    path:'/reset-password/:token',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResetPassword.vue'),
    meta:{ guestOnly: true}
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// function isLoggedIn(){
//   return localStorage.getItem("token");
// }

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.authOnly)){
//     if(!isLoggedIn()){
//       next({
//         path: "/login",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   }else if (to.matched.some(record =>record.meta.guestOnly)){
//     if(isLoggedIn()){
//       nexy({
//         path: "/dashboard",
//         query: { redirect: to.fullPath }
//       });
//     }else {
//       next();
//     }
//   }else{
//     next();
//   }
// });

export default router
