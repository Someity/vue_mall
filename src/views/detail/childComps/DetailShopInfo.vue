<!-- 详情页商品店铺信息 -->
<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
     <!-- 店家图标和名称 -->
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>

    <!-- 店家相关描述 -->
    <div class="shop-middle">
      <div class="shop-middle-left">

        <!-- 店家商品销售量 -->
        <div class="info-sells">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>

        <!-- 店家全部宝贝 -->
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount + " 件"}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <!-- 店家评价 -->
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}：</td>
            <td class="score" :class="{'score-color': item.isBetter}">
              {{item.score}}
            </td>
            <td class="better" :class="{'better-color': item.isBetter}">
              <span>{{item.isBetter ? "高" : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div>进店逛逛~</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    shop:{
        type:Object,
        default(){
            return {}
        }
    }
  },
  filters:{
      sellCountFilter (value) {
        let count = value < 10000 ?  value : (value / 10000).toFixed(1) + ' 万';
        return count;
      }
    }
}

</script>
<style  scoped>
  .detail-shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shop-middle-right,
  .shop-middle-left {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 15px 0px;
    border-right: 1px solid rgba(0, 0, 0, .2);
    color: #333;
  }
  .sells-count, 
  .goods-count {
    font-size: 18px;
  }
  .sells-text, 
  .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .shop-middle-right {
    font-size: 13px;
    color: #333;
  }
  .shop-middle-right table {
    width: 100%;
  }
  .shop-middle-right table td {
    flex:1;
    padding: 5px 11px;
  }
  .shop-middle-right .score {
    text-align: center;
    color: #5ea732;
  }
  .shop-middle-right .score-color {
    color: #f13e3a;
  }
  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .shop-middle-right .better-color span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    height: 25px;
    margin-top: 10px;
    text-align: center;
    line-height: 25px;
    font-size: 13px;
    border-radius: 10px;
    background-color: #f40;
    color: #fff;
  }
</style>