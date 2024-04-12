import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
})
