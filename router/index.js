import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../components/Music.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../components/Gallery.vue')
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    setTimeout(() => {
      const element = document.getElementById(to.hash.replace(/#/, ''))
      if (element && element.scrollIntoView) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    }, 100)

    //NOTE: This doesn't work for Vue 3
    //return {selector: to.hash}

    //This does
    return { el: to.hash };
  }
  else if (savedPosition) {
    return savedPosition
  }
  return { top: 0 }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior

});

export default router
