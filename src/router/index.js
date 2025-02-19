import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import About from '@/components/About.vue'
import Booking from '@/components/Booking.vue'
import Contact from '@/components/Contact.vue'
import Menu from '@/components/Menu.vue'
import Order from '@/components/Order.vue'
import Restrauntlist from '@/components/Restrauntlist.vue'
import Feedback from '@/components/Feedback.vue'

// route array of objects :path,component
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/booking',
    component: Booking
  },
  {
    path:'/contact',
    component: Contact
  },
  {
    path:'/feedback',
    component: Feedback
  },
  {
    path:'/menu',
    component: Menu
  },
  {
    path:'/order',
    component: Order
  },
  {
    path:'/restrauntlist',
    component: Restrauntlist
  }
  
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
