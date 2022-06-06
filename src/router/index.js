import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// vue-router > 3.0.0 跳转相同路由抛出错误 vur-router版本升级修改了回调写法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routerMap = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/home',
    name: 'home1',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView')
  },
]


export default new Router({
  mode: 'hash',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
