<!--
 * @Author: KingWJC
 * @Date: 2021-10-15 17:18:24
 * @LastEditors: KingWJC
 * @LastEditTime: 2021-10-15 17:24:25
 * @Descripttion:
 * @FilePath: \projectSimple\src\components\CommPic.vue
-->
<template>
  <div>
    <img
      v-for="(item,index) in infoContent.images"
      :key='index'
      :src="item.imgUrl"
      @click="changeImg(index)"
      alt=""
    >
    <p class="cur">
      <img
        :src="infoContent.images[idx].imgUrl"
        alt=""
      >
    </p>
    <p class="detail">
      <span>{{infoContent.productColor}}</span> <span>{{infoContent.productSize}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['infoContent'],
  data () {
    return {
      idx: 0
    }
  },
  methods: {
    changeImg (idx) {
      this.idx = idx
    }
  }
}
</script>

<style scoped>
img {
  width: 60px;
  margin-right: 10px;
  cursor: pointer;
}
.cur img {
  width: 300px;
}
.detail {
  font-size: 12px;
  color: #aaa;
}
</style>
