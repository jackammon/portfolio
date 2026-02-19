// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import EntriesIndex from './views/EntriesIndex.vue'
import BlogPost from './views/BlogPost.vue'
import ProjectDetail from './views/ProjectDetail.vue'

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
    path: '/projects/:slug',
    name: 'project-detail',
    component: ProjectDetail
  },
  {
    path: '/entries',
    name: 'entries',
    component: EntriesIndex
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
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
  },
  {
    // Redirect any unmatched paths to root
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
