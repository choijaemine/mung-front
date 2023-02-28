import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView';
import NaverLogin from '@/views/login/NaverLogin';
import GoogleLogin from '@/views/login/GoogleLogin';
import WalkingDogBoardView from '@/views/walkingDog/WalkingDogBoardView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: NaverLogin,
  },
  {
    path: '/google',
    name: 'GoogleLogin',
    component: GoogleLogin,
  },
  {
    path: '/walking-dog',
    name: 'WalkingDog',
    component: WalkingDogBoardView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
