<template>
<!-- 详情页 -->
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"  ref="nav"/>
    <!-- 滑动区域 -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll">
      <!-- 轮播图 -->
      <detail-swiper :top-images="topImages" />
      <!-- 商品介绍 -->
      <datail-base-info :goods="goods" />
      <!-- 商家信息 -->
      <detail-shop-info :shop="shop" />
      <!-- 商品照片 -->
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <!-- 商品参数 -->
      <detail-params-info :param-info="paramInfo" ref="params" />
      <!-- 商品评论 -->
      <detail-comment-info
        v-if="commentInfo"
        :commentInfo="commentInfo"
        ref="comment"
      />
      <!-- 推荐商品 -->
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
    <!-- 底部导航 -->
    <detail-bottom-bar @addCart="addToCart"/>
    <!-- 回到顶部 （.native 修饰符 监听组件的原生事件）-->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
// 组件
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DatailBaseInfo from "./childComps/DataBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from './childComps/DetailBottomBar.vue';
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
// 防抖函数
import { debounce } from "common/utils";
// 混入代码
import { itemListenerMixin,backTopMixin } from "common/mixin";
// 映射代码
import {mapActions} from 'vuex'
// 数据请求
import {
  getDetail,
  GoodInfo,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
// import Toast from '../../components/common/toast/Toast.vue';




export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DatailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    // Toast,
  },
  // 混入数据
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      // 用户id
      iid: null,
      // 轮播图数据
      topImages: [],
      // 商品介绍
      goods: {},
      // 店铺信息
      shop: {},
      // 商品的详细信息
      detailInfo: {},
      // 商品参数
      paramInfo: {},
      // 评论信息
      commentInfo: {},
      // 推荐数据
      recommend: [],
      // 各个模块的Y值
      themeTopYs: [],
      // 给计算Y值的代码进行防抖
      getThemeTopY:null,
      // 当前模块对应的index值（滑动改变颜色top
      currentIndex:0,
      // message:'',
      // show:false
    };
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.id;
    // 根据id请求数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      // 1、获取顶部图片轮播的数据
      this.topImages = data.itemInfo.topImages;
      // 2、获取商品介绍
      this.goods = new GoodInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3、店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4、商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5、商品参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6、评论信息
      if(data.rate.list){
        this.commentInfo = data.rate.list[0] ;
      }
       
     
    }),
    // 推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
    // 给getThemeTopY 进行赋值 目的是给 获取元素y值的代码进行防抖 获取到四个模块的Y值
    this.getThemeTopY = debounce(()=>{
      this.themeTopYs=[]
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeTopYs);
    },100)
  },
  mounted() {},
  methods: {
    // 映射代码
    ...mapActions(['addCart']),
    // 重新计算scroll的高度
    imageLoad() {
      // 重新刷新
      this.refresh();
      // 图片加载完成后 调用获取高度这个函数
      this.getThemeTopY()
    },
    // 点击改变选项卡内容
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    //  滑动会触发此事件
    contentscroll(position){
      // 1、内容滑动改变选项卡
      const positionY = -position.y
      // console.log(positionY);
      // 进行对比 根据获取到的y值和 获取到模块Y值 进行对比 来决定 index 的值
      let length = this.themeTopYs.length // 4
      // for 循环四次
      for (let i = 0; i < length; i++) {
        // i 小于 3 
        // 并且实时的Y值 >= 已经获取的Y值 
        // 并且实时的Y值 < 获取到的Y值+I（循环一次加一）
        // 
       // console.log(positionY , this.themeTopYs[1],'第一');
       // console.log(positionY , this.themeTopYs[2],'第二');
       // console.log(positionY , this.themeTopYs[3],'第三');
      //  console.log(i < length - 1 , i);
        if(
            (this.currentIndex !== i) // 防止赋值过于频繁
            &&
            (
              (i < length - 1 && 
              positionY >= this.themeTopYs[i] && 
              positionY < this.themeTopYs[i+1]) 
              || 
              (i === length - 1 &&
              positionY >= this.themeTopYs[i])
            )
        ){
            console.log(i);
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex = i
            // console.log(this.currentIndex);
          } 
      }
     // 2、 调用混入的代码判断回到顶部按钮是否显示
      this.listenshowBackTop(position)
      
    },
    // 加入购物车
    addToCart(){
      // 1、获取购物车需要的信息 图片 标题  描述信息 价格 iid 
      const product = {} 
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 2、将商品加入购物车 ___知识点_[1、返回promise 2、vuex的映射 mapActions]
      //  this.$store.commit('addCart',product)
       this.addCart(product).then(res => {
        // //  普通封装 
        //  this.show = true
        //  this.message = res
        //  setTimeout(() => {
        //    this.show = false
        //    this.message = ''
        //  }, 1500);
        // 弹窗
        this.$toast.show(res)
       })
    }
  },
  // 销毁前调用
  destroyed() {
    // 销毁全局的事件 （事件总线 销毁）
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9999;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9999;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
/* .goods-list {
  position: relative;
  z-index: 9999;
} */


</style>