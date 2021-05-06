<!--  -->
<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <!-- 侧边栏菜单 -->
    <cate-left-menu
      :cartType="cartType"
      @leftItemClick="leftItemClick"
    ></cate-left-menu>

    <!-- 流行新款精选菜单切换组件 -->
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControlTop"
      class="tab-control-top"
      v-show="isShowTabControl"
    ></tab-control>

    <scroll ref="scroll" class="scroll" @scroll="listenshowBackTop" :probeType="3"> 
      <cate-grid-content
        :varieticeList="varieticeList"
        class="grid-content"
        @gridImgLoaded="gridImgLoaded"
      ></cate-grid-content>

      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>

      <goods-list :goods="showTabGoods"></goods-list>
    </scroll>

    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from 'components/content/backTop/BackTop.vue';

import {getCategory,
        getVarietice,
        getVarieticeGoods
        } from "network/category.js";
import {backTopMixin} from "common/mixin";

import CateLeftMenu from "./childComps/CateLeftMenu";
import CateGridContent from "./childComps/CateGridContent.vue";


export default {
  name: "Category",
  mixins: [backTopMixin],
  data() {
    return {
      //保存左侧边栏商品分类
      cartType: [],
      //每个分类下的商品对象
      categoryInfo: {},

      //当前点击的索引
      currentIndex: -1,

      //tab标题
      titles: ["流行", "新款", "精选"],

      //tab栏默认展示pop流行栏数据
      currentShow: "pop",

      //是否显示顶部的tab栏
      isShowTabControl: false,

      //tab栏距离页面顶部的高度
      tabControlOffsetTop: null,
    };
  },

  components: {
    NavBar,
    CateLeftMenu,
    CateGridContent,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },

  computed: {
    varieticeList() {
      return this.currentIndex != -1
        ? this.categoryInfo[this.currentIndex].varieticeData
        : {};
    },
    showTabGoods() {
      return this.currentIndex != -1
        ? this.categoryInfo[this.currentIndex]
        .goodsControlData[this.currentShow]
        : [];
    },
  },

  mounted() {},

  created() {
    this.getCategory();
  },
  updated() {
    this.$refs.scroll.refresh();
  },

  methods: {
    getCategory() {
      getCategory().then((res) => {
        // console.log(res.data.category.list);
        this.cartType = res.data.category.list;
        for (let i = 0; i < this.cartType.length; i++) {
          this.categoryInfo[i] = {
            //商品中的品类数据
            varieticeData: {},
            //商品的goodslist
            goodsControlData: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        this._getVarietice(0);
      });
    },
    _getVarietice(index) {
      let maitKey = this.cartType[index].maitKey;
     getVarietice(maitKey).then((res) => {
        // console.log(res)
        this.categoryInfo[index].varieticeData = res.data;
        this.categoryInfo = { ...this.categoryInfo };

        this.currentIndex = index;

        this._getTabControlGoods("pop");
        this._getTabControlGoods("new");
        this._getTabControlGoods("sell");

        this.$refs.scroll.refresh();
      });
    },
    _getTabControlGoods(type) {
      // 获取请求的miniWallkey
      const miniWallkey = this.cartType[this.currentIndex].miniWallkey;
      // 发送请求,传入miniWallkey和type
      getVarieticeGoods(miniWallkey, type).then((res) => {
        //将获取的数据保存下来
        // console.log(res)
        this.categoryInfo[this.currentIndex].goodsControlData[type] = res;
        this.categoryInfo = { ...this.categoryInfo };
      });
    },

    leftItemClick(index) {
      this._getVarietice(index);
      this.currentIndex = index;
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentShow = "pop";
          break;
        case 1:
          this.currentShow = "new";
          break;
        case 2:
          this.currentShow = "sell";
          break;
      }

      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlTop.currentIndex = index;
    },
    gridImgLoaded() {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
};
</script>
<style  scoped>
.nav-bar {
  background-color: #ff8198;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.tab-control-top {
  width: 75%;
  position: absolute;
  top: 43px;
  right: 0;
  z-index: 2;
  background-color: #fff;
}

.scroll {
  position: absolute;
  width: 75%;
  top: 45px;
  right: 0;
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>