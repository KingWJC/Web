/*
 * @Author: KingWJC
 * @Date: 2021-08-09 16:29:08
 * @LastEditors: KingWJC
 * @LastEditTime: 2021-08-09 18:20:10
 * @Descripttion:
 * @FilePath: \projectSimple\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue' // 导入Home组件
import User from '@/components/User.vue'
import Product from '@/components/Product.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/product/:id',
    component: Product
  }
  ]
})
