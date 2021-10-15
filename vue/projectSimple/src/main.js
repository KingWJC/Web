/*
 * @Author: KingWJC
 * @Date: 2021-08-17 09:37:01
 * @LastEditors: KingWJC
 * @LastEditTime: 2021-10-15 17:22:53
 * @Descripttion:
 * @FilePath: \projectSimple\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 相对路径引入的App.vue文件
import App from './App'
import router from './router'

// 这行命令的作用是给生产环境配置的提示消息，如果为true或者默认不配置，会有相关提示语
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
