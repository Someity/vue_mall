<template>
<!-- ---------轮播图模块封装------------ -->
  <swiper class="detail-swiper">
    <swiper-item
      v-for="(item,index) in topImages"
      :key="index"
      >
        <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem } from 'components/common/swiper';

export default {
  name: 'VueDetailswiper',
  components: { Swiper, SwiperItem },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>