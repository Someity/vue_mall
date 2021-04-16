<template>
   <!-- 轮播图 -->
    <swiper>
      <swiper-item :key='item.length' v-for="item in banner ">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
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
  data(){
    return {
      isLoad:false
    }
  },
  methods: {
    // 监听轮播图是否加载完成
    imageLoad() {
      // 只发出一起事件就可以了 不进行多次触发
      if(!this.isLoad){
      this.$emit('swiperImageLoad');
        this.isLoad = true
      }
    },
  },
  
};
</script>

<style scoped>

</style>