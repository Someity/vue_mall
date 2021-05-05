<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item 
      v-for="(item,index) in cartList " 
      :key="index" 
      :itemInfo='item'/>
    </scroll>
  </div>
</template>

<script>
// 将 store 中的 getter 映射到局部计算属性：
import { mapGetters } from 'vuex'
import Scroll from 'components/common/scroll/Scroll.vue';
import CartListItem from './CartListItem.vue';
export default {
  name: 'VueCartlist',
  components: {Scroll,CartListItem  },
  directives: {  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
  // 计算属性
  computed: {
		// 将 store 中的 getter 映射到局部计算属性：
		...mapGetters(['cartList'])
   
  },
  activated() {
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
/* 商品区域 */
.cart-list {
  height: calc(100% - 44px - 49px - 50px);
}
/* .cart-list {
 position: absolute;
 top: 44px;
 left: 0;
 right: 0;
 bottom: 89px;
} */
/* 滚动区域 */
.content {
  height: 100%;
  overflow: hidden;
}
</style>