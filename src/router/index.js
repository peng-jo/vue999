import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import Reference from '../views/Reference.vue';
import Youtube from '../views/Youtube.vue';
import Script from '../views/Script.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';
import Movie from '../views/Movie.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/reference',
    name: 'Reference',
    component: Reference,
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube,
  },
  {
    path: '/script',
    name: 'Script',
    component: Script,
  },
  {
    path: '/reference',
    name: 'Reference',
    component: Reference,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/Movie',
    name: 'Movie',
    component: Movie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
