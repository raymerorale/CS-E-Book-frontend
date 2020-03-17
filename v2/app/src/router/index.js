import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/Login'
import BooksList from '@/modules/BooksList'
import Content from '@/modules/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/books-list',
      name: 'BooksList',
      component: BooksList
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    }
  ]
})
