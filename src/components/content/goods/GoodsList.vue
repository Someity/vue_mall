<template>
  <div class="goods">
    <goods-list-item 
    :key="index" 
    v-for="(item,index) in goods" 
    :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  props:{
    goods:{
       //规定传来数据的类型
      type:Array,
      //如果没有传来使用默认数据
      default() { 
        return []
      }
    }
  },
  name: 'VueGoodslist',
  components: { GoodsListItem }
 
};
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>