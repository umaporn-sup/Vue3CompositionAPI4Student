import { createRouter, createWebHistory } from 'vue-router'
import MyPortfolio from '../views/MyPortfolio.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import StudentItem from '../views/StudentItem.vue'
const history = createWebHistory()

const routes = [
  {
    path: '/:catchNotMatchPath(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/my-portfolio',
    name: 'MyPortfolio',
    component: MyPortfolio
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/student-item/:studentId',
    name: 'StudentItem',
    component: StudentItem
  }
]

const router = createRouter({ history, routes })
export default router
