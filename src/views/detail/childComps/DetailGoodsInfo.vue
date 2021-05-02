
<template>
<!-- ------------商品图片展示----------- -->
  <div
    v-if="
      Object.keys(detailInfo).length !== 0 &&
      Object.keys(detailInfo).length !== undefined
    "
    class="goods-info"
  >
    <!-- 简介 -->
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <!-- 穿衣效果 -->
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <!-- 图片列表 -->
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // couter:0,
      // imagesLength:0
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 当图片发生变化时触发
    imageLoad() {
      this.$emit("imageLoad"); 

      // 当couter的数量等于图片的数量时说明图片已经全部出现了
      // if(++this.couter === this.imagesLength){
      //   // 发送事件
      // this.$emit("imageLoad"); 
      // }
    },
  },
  watch:{
    // 获取图片的页数
    // detailInfo(){
    //   this.imagesLength = this.detailInfo.detailImage[0].list.length
    // }
  }
};
</script>
<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0px;
}

.info-desc .end::after {
  right: 0px;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>