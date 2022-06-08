import Vue from 'vue'
import App from './App.vue'
import router from '@/router';

import highlight from 'highlight.js';
import 'highlight.js/styles/github.css';

import 'github-markdown-css';

import './assets/style.scss';
import  './config/element-ui';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('to', to);
  next()
})

Vue.use(highlight);
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    highlight.highlightBlock(block)
  })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
