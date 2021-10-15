<!--
 * @Author: KingWJC
 * @Date: 2021-10-15 17:18:24
 * @LastEditors: KingWJC
 * @LastEditTime: 2021-10-15 17:26:40
 * @Descripttion:
 * @FilePath: \projectSimple\src\components\TheOneComment.vue
-->
<template>
  <div class="box">
    <div class="left">
      <div class="pic">
        <img
          :src="'http://'+info.userImage"
          alt=""
        >
      </div>
      <h4>{{info.nickname}}</h4>
    </div>
    <div class="right">
      <p
        class="star"
        :style="{'background-position': -16 * (5 - info.score) + 'px 0px'}"
      ></p>
      <p>
        {{info.content}}
      </p>
      <CommPic :info-content="info"></CommPic>
    </div>
  </div>
</template>

<script>
import CommPic from './CommPic.vue'
export default {
  props: ['info'],
  components: {
    CommPic
  }
}
</script>

<style scoped>
.box {
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}
.box .left {
  flex: 2;
}
.box .left .pic {
  width: 40px;
  height: 40px;
}
.box .left .pic img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.box .right {
  flex: 8;
}
.box .right .star {
  width: 80px;
  height: 14px;
  background: url(../assets/star.png);
}
</style>
