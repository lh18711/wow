import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/', //主区域路由
  name: 'index',
  redirect: '/wowIndex', //默认主页
  component: () => import('../views/index.vue'),
  children: [{ //主页路由
      path: 'wowIndex',
      name: 'wowIndex',
      redirect: '/wowIndex/reco', //把子路由写成这种形式实现在切换子路由时候一样可以高亮显示
      component: () => import('../views/wowIndex.vue'),
      children: [{
        path: '/wowIndex/reco', //推荐
        name: 'reco',
        component: () => import('../views/reco.vue'),
      }, {
        path: '/wowIndex/space', //品质空间
        name: 'space',
        component: () => import('../views/space.vue'),
      }, {
        path: '/wowIndex/living',
        name: 'living', //居家
        component: () => import('../views/living.vue'),
      }]
    },
    { //分类页路由
      path: '/category',
      name: 'category',
      component: () => import('../views/category/category.vue')
    },
    { //购物车页路由
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/cart.vue')
    },
    { //消息页路由
      path: '/message',
      name: 'message',
      component: () => import('../views/message/message.vue')
    },
    {
      path: '/message/list',
      name: 'messageList',
      component: () => import('../views/message/messageList.vue')
    },
    { //个人中心路由
      path: 'my',
      name: 'my',
      component: () => import('../views/my/my.vue')
    },
  ]
}, {
  path: '/categoryDetail/:id/:name/:type',
  name: 'categoryDetail',
  component: () => import('../views/category/cDetail.vue')
}, {
  path: '/search',
  name: 'seach',
  component: () => import('../views/search/searchView.vue'),
  children: [{
    path: 'result/:keywords',
    name: 'searchResult',
    component: () => import('../views/search/searchResult.vue')
  }]
}, {
  path: '/item/:id/:pId',
  name: 'item',
  component: () => import('../views/item.vue')
}, {
  path: '/order/:id/:qty',
  name: 'order',
  component: () => import('../views/order.vue')
}, {
  path: '/myfavourite',
  name: 'myfavourite',
  component: () => import('../views/my/myfavourite.vue')
}]

const router = new VueRouter({
  routes
})

export default router
