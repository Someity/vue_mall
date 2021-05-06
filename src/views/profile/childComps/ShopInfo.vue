<!--  -->
<template>
  <div class="shop">
    <div>
      <div><span>0.00</span>元</div>
      <div class="bottom-text">我的余额</div>
    </div>
    <div>
      <div><span>0</span>个</div>
      <div class="bottom-text">我的优惠</div>
    </div>
    <div>
      <div><span>0</span>分</div>
      <div class="bottom-text">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style  scoped>
.shop {
  width: 100%;
  padding: 5px;
  display: flex;
  font-size: 14px;
}
.shop > div {
  flex: 1;
  border-right: 1px solid #eee;
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shop > div .bottom-text {
  margin-top: 5px;
}
.shop > div span {
  color: rgb(248, 136, 8);
  font-size: 22px;
}
.shop  > div:last-child {
  border: none;
}
</style>