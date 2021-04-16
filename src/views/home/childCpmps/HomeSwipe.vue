<template>
   <!-- 轮播图 -->
    <swiper>
      <swiper-item :key='item.length' v-for="item in banner ">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
// 导入轮播图模块
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: 'VueHomeswipe',
  components: { Swiper, SwiperItem },
  props:{
    banner:{
      //规定传来数据的类型
      type:Array,
      //如果没有传来使用默认数据
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    };
  },
  
};
</script>

<style scoped>

</style>