import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // base:"http://jmosesessel.github.io/j-weather-app/",
  base: process.env.NODE_ENV === 'production' ? '/j-weather-app/' : '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/weather/:state/:city',
      name: 'cityView',
      component: CityView
    },
  ]
})

export default router
