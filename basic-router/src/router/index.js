import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../views/AboutUs.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import NoteItem from '../views/NoteItem.vue'
const history = createWebHistory()
const routes = [
  {
    path: '/aboutus',
    name: 'About',
    component: AboutUs
  },
  { path: '/', name: 'Home', component: Home },
  {
    path: '/:catchNotMatchPath(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/note-item/:noteId',
    name: 'NoteItem',
    component: NoteItem
  }
]
const router = createRouter({ history, routes })
export default router
