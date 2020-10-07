import Vue from 'vue'
import VueRouter from 'vue-router'
import menus from '@/config/home/menu-config'
const Home = () => import('@/views/Home.vue');

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  name: 'home',
  path: '/home',
  component: Home
}]

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.component}`,
      name: sub.component,
      component: () => import(`@/views/${item.id}/${sub.component}`)
    })
  })
})
routes.push()

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router