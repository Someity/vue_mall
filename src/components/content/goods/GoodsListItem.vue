<template>
  <div class="goods-item" @click="itemClick">
    <!-- 商品图片 -->
    <img v-lazy="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <!-- 商品标题 -->
      <p>{{ goodsItem.title }}</p>
      <!-- 商品价格 -->
      <span class="price">{{ goodsItem.price }}</span>
      <!-- 商品收藏数量 -->
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      //规定传来数据的类型
      type: Object,
      //如果没有传来使用默认数据
      default() {
        return {};
      },
    },
  },
  name: "VueGoodslistitem",
  methods: {
    // 图片加载完成触发则方法
    imageLoad() {
      // 通过事件总线传递出去
      this.$bus.$emit("itemImageLoad");
    },
    // 跳转到详情页将id传出去 用于获取数据
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      if (this.goodsItem.show) {
        return this.goodsItem.show.img;
      } else if (this.goodsItem.image) {
        return this.goodsItem.image;
      } else {
        return this.goodsItem.img;
      }
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 30px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>