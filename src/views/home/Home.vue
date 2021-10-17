<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 活动分类 -->
    <tab-control v-show="isTabFixed" class="tab-control" ref="tabControl1" :titles="['流行', '新款', '精选']" @tabClick="TabClick" />
    <!-- 滑动组件 -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll" :pull-up-load="true" @pullingUp="loadMore">
      <!-- 轮播图 -->
      <home-swipre :banner="banner" @swiperImageLoad="swiperImageLoad" />
      <!-- 推荐信息 -->
      <recommend-view :recommends="recommend" />
      <!-- 本周流行 -->
      <feature-view />
      <!-- 活动分类 -->
      <tab-control ref="tabControl2" :titles="['流行', '新款', '精选']" @tabClick="TabClick" />
      <!-- 商品瀑布 -->
      <good-list :goods="showGoods" />
    </scroll>
    <!-- 回到顶部 （.native 修饰符 监听组件的原生事件）-->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 导入请求数据
import { getHomeMultidata, getHomeGoods } from 'network/home'
// 防抖函数(以混入)
// import { debounce } from "common/utils";
// 混入代码
import { itemListenerMixin, backTopMixin } from 'common/mixin'
// ------------公共的组件---------------
// 导入导航模块
import NavBar from 'components/common/navbar/NavBar'
// 导入滑动插件
import Scroll from 'components/common/scroll/Scroll'
// 导入 活动分类选项
import TabControl from 'components/content/tabControl/TabControl'
// 导入商品瀑布组件
import GoodList from 'components/content/goods/GoodsList'
// 导入回到顶部组件
// import BackTop from "components/content/backTop/BackTop";
// ------------私有的组件---------------
// 导入轮播图
import HomeSwipre from './childCpmps/HomeSwipe'
// 导入热门组件
import RecommendView from './childCpmps/RecommendViws'
// 导入本周流行
import FeatureView from './childCpmps/FeatureView'

export default {
  // 注册组件
  components: {
    NavBar,
    TabControl,
    GoodList,
    HomeSwipre,
    RecommendView,
    FeatureView,
    Scroll
    // BackTop,
  },
  name: 'Home',
  // 混入数据
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      // 轮播图数据
      banner: [],
      //推荐信息数据
      recommend: [],
      // 商品的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      //  请求的分类
      currentType: 'pop',
      // // 回到顶部按钮
      // isShowBackTop: false,
      // 选项的顶部距离
      tabOffserTop: 0,
      // fixed样式是否生效
      isTabFixed: false,
      // 离开页面是的高度
      saveY: 0
    }
  },
  // 生命周期函数 模板渲染成html前调用
  created() {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  // 生命周期函数 模板渲染成html后调用
  mounted() {
    // // 1、 图片加载完成的事件监听
    // const refresh = debounce(this.$refs.scroll.refresh, 50);
    // // 利用--事件总线--监听图片加载完成
    // this.$bus.$on("itemImageLoad", () => {
    //   // 刷新ScrollerHeight 可滚动区域
    //   refresh();
    // });
  },
  // 计算属性
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  // 离开当前页面触发
  deactivated() {
    // 保存离开页面是的Y坐标
    this.saveY = this.$refs.scroll.getScrollY()
    // 销毁全局的事件监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  // 进入页面触发
  activated() {
    // scrollTo（x轴，y轴， 移动时间：毫秒）
    // 进入页回到离开的坐标
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 刷新一下
    this.$refs.scroll.refresh()
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // 判断请求的数据
    TabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 两个tabControl 保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // // 回到顶部
    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0);
    // },
    // 判断滑动的位置
    contentscroll(position) {
      // 调用混入的代码判断回到顶部按钮是否显示
      this.listenshowBackTop(position)
      // 判断吸顶效果是否显示
      this.isTabFixed = -position.y > this.tabOffserTop
    },
    // 上拉加载更多
    loadMore() {
      // 重新调用获取商品列表
      this.getHomeGoods(this.currentType)
    },
    // 轮播图加载完成触发此事件
    swiperImageLoad() {
      this.tabOffserTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      // 1、请求获取多个数据
      getHomeMultidata().then(res => {
        // 轮播图数据
        this.banner = res.data.banner.list
        // 推荐信息数据
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* 原生滚动使用的属性 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999999; */
}
.tab-control {
  position: relative;
  z-index: 999;
}
/* 定位方式 */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* 动态计算 */
/* .content {
  margin-top: 44px;
  height: calc(100% - 93px);
  overflow: hidden;
} */
</style>