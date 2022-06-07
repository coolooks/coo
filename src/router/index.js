import Vue from 'vue'
// import layout from '@/layout';
import Router from 'vue-router'
Vue.use(Router)

import Note from './note';
import Record from './record';
import Learn from './learn';
import About from './about';

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
  ...Note,
  ...Record,
  ...Learn,
  ...About,
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404')
  }
]


export default new Router({
  mode: 'hash',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
