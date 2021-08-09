<!--
 * @Author: KingWJC
 * @Date: 2021-08-09 18:02:33
 * @LastEditors: KingWJC
 * @LastEditTime: 2021-08-09 18:03:11
 * @Descripttion:
 * @FilePath: \projectSimple\src\components\Product.vue
-->
<template>
  <div class="product">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'product', // 组件可以有自己的名字。
  data () { // 组件的data必须是函数
    return {
      msg: '这里是Home视图'
    }
  }
}
</script>

<style scoped>
h3 {
  background-color: green;
}
</style>
