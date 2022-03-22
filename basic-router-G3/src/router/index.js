import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'

import ProductItem from '../views/ProductItem.vue'

const history = createWebHistory()
const routes = [
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/', name: 'Home', component: Home },
  {
    path: '/product-item/:productId',
    name: 'ProductItem',
    component: ProductItem
  },
  {
    path: '/:catchNotMatchPath(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({ history, routes })
export default router
