<template>
<!-- ref/chidren -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: 'VueScroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null
    };
  },
  // 在模板渲染成html后调用
  mounted() {
    // 1、创建BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      // 控制元素是否能被点击
      click:true,
      // 监听元素的滚动类型
      probeType:this.probeType,
      // 监听上拉更新事件
      pullUpLoad:this.pullUpLoad
    })
    // 2 、实时监听滚动的位置
    this.scroll.on('scroll',position => {
      // 利用自定义事件将数据传出去
      this.$emit('scroll',position);
    })
    // 3、监听上拉事件
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp');
    })
  },
  methods: {
    // 设置回到顶部按钮
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    // 上拉刷新
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    // 重新刷新bscroll 获取最新可滚动区域
    refresh(){
      this.scroll.refresh()
    }
  },
};
</script>

<style scoped>

</style>