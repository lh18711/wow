import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  List,
  Cell,
  Sticky
} from 'vant'
Vue.config.productionTip = false
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

import axios from 'axios'
// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
  config.headers['X-CSRF-Token'] = "64fd5926-7bc1-495c-b270-403add76fe8f";
  return config
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed'
Vue.use(Button).use(List).use(Cell).use(Sticky)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
