<template>
  <div>
     <tab-bar>
      <tab-bar-item link="/home">
        <img src="~assets/img/tabbar/home.svg" slot="icon" alt="">
        <img src="~assets/img/tabbar/home_active.svg" slot="active-icon">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img src="~assets/img/tabbar/category.svg" slot="icon" alt="">
        <img src="~assets/img/tabbar/category_active.svg" slot="active-icon">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="icon" alt="">
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="active-icon">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="profile">
        <img src="~assets/img/tabbar/profile.svg" slot="icon" alt="">
        <img src="~assets/img/tabbar/profile_active.svg" slot="active-icon">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: { 	TabBar,
      TabBarItem },
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

</style>