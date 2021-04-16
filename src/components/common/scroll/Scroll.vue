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
  name: "VueScroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  // 在模板渲染成html后调用
  mounted() {
    // 1、创建BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 控制元素是否能被点击
      click: true,
      // 监听元素的滚动类型0/1/ （不监听）2/（手指滚动）3（全部滚动）
      probeType: this.probeType,
      // 监听上拉更新事件 布尔值
      pullUpLoad: this.pullUpLoad,
    });
    // 2 、实时监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // 利用自定义事件将数据传出去
        this.$emit("scroll", position);
      });
    }
    // 3、监听scroll滚动-上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // 发生上拉事件触发此方法
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 设置回到顶部按钮
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 重新刷新bscroll 获取最新可滚动区域
    refresh() {
      // console.log('-----');
      this.scroll && this.scroll.refresh();
    },
    // 上拉加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 获取离开页面是的高度
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style scoped>
</style>