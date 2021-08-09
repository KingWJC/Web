<!--
 * @Author: KingWJC
 * @Date: 2021-08-09 16:29:08
 * @LastEditors: KingWJC
 * @LastEditTime: 2021-08-09 18:24:23
 * @Descripttion:
 * @FilePath: \projectSimple\src\App.vue
-->
<template>
  <div id="app">
    <nav class="top-menu">
      <ul>
        <li
          v-for="item in menuList"
          v-bind:key="item.id"
        >
          <router-link v-bind:to="item.url">{{item.name}} </router-link>
        </li>
      </ul>
    </nav>
    <img src="./assets/logo.png">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuList: [
        { id: 1, name: '首页', url: '/home' },
        { id: 2, name: '用户', url: '/user/19' },
        { id: 3, name: '产品', url: '/product/20' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.top-menu ul,
.top-menu li {
  list-style: none;
}

.top-menu {
  overflow: hidden;
}

.top-menu li {
  float: left;
  width: 100px;
}
</style>
