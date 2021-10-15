<!--
 * @Author: KingWJC
 * @Date: 2021-10-15 17:25:12
 * @LastEditors: KingWJC
 * @LastEditTime: 2021-10-15 17:25:13
 * @Descripttion:
 * @FilePath: \projectSimple\src\components\Comment.vue
-->
<template>
  <div>
    <TheOneComment
      v-for="(item,index) in commentsArr"
      :info="item"
      :key="index"
    ></TheOneComment>
  </div>
</template>

<script>
// 引入组件
import TheOneComment from './components/TheOneComment.vue'
// 引入文件
import comments from './comments.js'

export default {
  // 注册组件
  components: {
    TheOneComment
  },
  data () {
    return {
      commentsArr: comments
    }
  },
  methods: {
    sumNum () {
      this.a++
    }
  }
}
</script>

<style>
</style>
