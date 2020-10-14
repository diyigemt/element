import Vue from 'vue'
import VueRouter from 'vue-router'
import menus from '@/config/home/menu-config'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  // redirect: '/home' //TODO replace
  redirect: '/EditMember/baseInfo'
}, {
  name: 'home',
  path: '/home',
  component: () => import('@/views/Home')
}]

for (let item of menus) {
  for (let sub of item.sub) {
    let childrens = [];
    if (typeof sub.children !== "undefined") {
      childrens.push({
        path: '',
        redirect: `${sub.children[0].path}`
      });
      for (let e of sub.children) {
        childrens.push({
          name: e.path,
          path: e.path,
          component: () => import(`@/views/${item.id}/children/${e.component}`)
        });
      }
    }
    routes.push({
      path: `/${sub.component}`,
      name: sub.component,
      component: () => import(`@/views/${item.id}/${sub.component}`),
      children: childrens
    })
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router