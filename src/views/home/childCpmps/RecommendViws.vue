<template>
  <div class="recommend">
    <div class="recommend-item"  :key='index' v-for=" (item,index) in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
       //规定传来数据的类型
      type:Array,
      //如果没有传来使用默认数据
      default() {
        return []
      }

    }
  },
  name: 'recommendviws',
  components: {  },
  directives: {  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
}
</style>