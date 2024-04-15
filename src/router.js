// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
