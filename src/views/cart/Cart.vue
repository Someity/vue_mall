<template>
<!-- 根元素 -->
  <div class="cart">
		<!-- 导航栏 -->
    <nav-bar>
			<!-- 插槽 -->
      <div slot="center">购物车({{ length }})</div>
      <!-- <div  slot="right" @click="deit">编辑</div> -->
    </nav-bar>
		<!-- 商品列表 -->
		<cart-list/>
		<!-- 底部汇总 -->
		<cart-bottom-bar/>
  </div>
</template>

<script>
// 将 store 中的 getter 映射到局部计算属性：
import { mapGetters } from 'vuex'
import NavBar from "components/common/navbar/NavBar";
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/cartBottomBar.vue';
export default {
  components: { NavBar,CartList, CartBottomBar },
  name: "cart",

	// 计算属性
  computed: {
		// 将 store 中的 getter 映射到局部计算属性：
		// 两种语法
    // ...mapGetters(['cartLength'])
    ...mapGetters({
			length:'cartLength'
		})
  },
};
</script>

<style scoped>
.cart {
	height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  
}
</style>