import Vue from 'vue'
import App from './App.vue'
import router from '@/router';

import 'github-markdown-css';
import './assets/style.scss';
import  './config/element-ui';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('to', to);
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
