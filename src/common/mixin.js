// ----------混入代码(多个页面可用) ：解决重复代码----------
// 1~图片加载完触发事件 Home和Detail 使用
import { debounce } from "./utils"; //  防抖函数
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // 1、 图片加载完成的事件监听
    this.refresh = debounce(this.$refs.scroll.refresh, 100)
    // 将监听的事件保存
    this.itemImgListener = () => {
      this.refresh()
    }
    // 利用--事件总线--监听图片加载完成
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    // console.log('混入');


  }
}
// 2~ 回到顶部 Home和Detail 使用
// 导入回到顶部组件
import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {
  data() {
    return {
      // 回到顶部按钮
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 
    listenshowBackTop(position){
      // 判断回到顶部按钮是否显示
      this.isShowBackTop = -position.y > 1000;
    }
  },
}