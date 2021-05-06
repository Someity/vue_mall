<!--  -->
<template>
  <div id="profile">
      <nav-bar class="nav-bar">
         <div slot="center">我的</div>
      </nav-bar>

      <user-info></user-info>

      <shop-info></shop-info>

      <list-view :list="orderList"></list-view>

      <list-view :list="serviceList"></list-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import UserInfo from './childComps/UserInfo.vue';
import ShopInfo from './childComps/ShopInfo.vue';
import ListView from './childComps/ListView.vue';
export default {
  name:'Profile',
  data () {
    return {
       orderList: [
          {icon: require('../../assets/img/profile/message.svg'), info: '我的消息'},
          {icon: require('../../assets/img/profile/pointer.svg'), info: '积分商城'},
          {icon: require('../../assets/img/profile/vip.svg'), info: '会员卡'},
        ],
        serviceList: [
          {icon: require('../../assets/img/profile/cart.svg'), info: '我的购物车'},
          {icon: require('../../assets/img/profile/shopping.svg'), info: '下载购物APP'},
        ]
    };
  },

  components: {
    NavBar,
    UserInfo,
    ShopInfo,
    ListView,
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  scoped>
.nav-bar{
   background-color: var(--color-tint);
   color: var(--color-background);
}
</style>