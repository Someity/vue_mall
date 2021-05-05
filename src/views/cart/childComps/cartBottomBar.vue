<template>
  <!-- -----------底部信息---------- -->
  <div class="bottom-bar">
    <!-- 全选按钮 -->
    <div class="check-conter">
      <check-button
        class="check-button"
        :isCheckd="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <!-- 合计模块 -->
    <div class="price">
      合计：
      <span>
        {{ totalPrice }}
      </span>
    </div>
    <!-- 结算 -->
    <div class="calculate" @click="calcClick">结算({{ checkLength }})</div>
  </div>
</template>

<script>
// 将 store 中的 getter 映射到局部计算属性：
import { mapGetters } from "vuex";
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  components: { CheckButton },
  name: "VueCartbottombar",
  data() {
    return {};
  },
  computed: {
    // 将 store 中的 getter 映射到局部计算属性：
    ...mapGetters(["cartList"]),
    /**
     * filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
     * 
     * reducer 函数接收4个参数:
        Accumulator (acc) (累计器)
        Current Value (cur) (当前值)
        Current Index (idx) (当前索引)
        Source Array (src) (源数组)
        您的 reducer 函数的返回值分配给累计器，
        该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
        // 累加和 + 价格 * 数量
        toFixed(2) 保留两位小数
     */
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    // 结算的数量
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    // 全选按钮的显示状态
    isSelectAll() {
      /**
       * item => !item.checked 判断值里面有没有false 里面的元素默认是ture
       * 又false的化返回这个数组 并计算这个数组的长度 并取反为布尔值 0===false
       */
      // if(this.cartList.length === 0) return false
      // return !(this.cartList.filter(item => !item.checked).length)
      /**
       * 性能会高一点
       * 判断是否又数据 如果数据的长度全等于0 了表示没有数据返回false
       * item => !item.checked 判断值里面有没有false 里面的元素默认是ture
       * 找到第一个false 就返回结果 并取反
       */
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    /**
     * 点击按钮全部权重
     * 1、全部选中时 点击改为全部不选中
     * 2、全部不选中或某几个不选中时 改为全部选中
     */
    checkClick() {
      if (this.isSelectAll) { // 全部选中
        this.cartList.forEach(item => item.checked = false);
      } else { // 
        this.cartList.forEach(item => item.checked = true);
      }
    },
    calcClick(){
      if(this.checkLength === 0) {
        this.$toast.show('请选择购买的商品')
      }
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #eee;
  font-size: 14px;
}
/* 左边元素 */
.check-conter {
  display: flex;
  align-items: center;
  width: 70px;
  margin-left: 10px;
}
/* 按钮 */
.check-button {
  width: 22px;
  height: 22px;
  line-height: 22px;
  margin-right: 10px;
}
.price {
  /* margin-left: 30px; */
  flex: 1;
  text-align: right;
  margin-right: 10px;
}
.price span {
  color: red;
  font-size: 16px;
  font-weight: 700;
  padding: 0;
}
.calculate {
  width: 90px;
  text-align: center;
background-color: var(--color-tint);
  /* border-radius: 20px; */
  
  color: #fff;
}
</style>