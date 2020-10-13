import Vue from 'vue'
import VueRouter from 'vue-router'
import menus from '@/config/home/menu-config'
const Home = () => import('@/views/Home.vue');

Vue.use(VueRouter)

const routes = [{
  path: '/',
  // redirect: '/home' //TODO replace
  redirect: '/EditMember'
}, {
  name: 'home',
  path: '/home',
  component: Home
}]

for (let item of menus) {
  for (let sub of item.sub) {
    let childrens = [];
    if (typeof sub.children !== "undefined") {
      for (let e of sub.children) {
        childrens.push({
          name: e.path,
          path: e.path,
          component: () => import(`@/views/${item.id}/children/${e.component}`)
        })
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
// menus.forEach((item) => {
//   item.sub.forEach((sub) => {
//     let childrens = [];
//     if (typeof sub.children !== "undefined") {
//       sub.children.forEach((e) => {
//         childrens.push({
//           path: e.path,
//           component: () => import(`@/views/${item.id}/children/${e.component}`)
//         })
//       });
//     }
//     routes.push({
//       path: `/${sub.component}`,
//       name: sub.component,
//       component: () => import(`@/views/${item.id}/${sub.component}`),
//       children: childrens
//     })
//   })
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router