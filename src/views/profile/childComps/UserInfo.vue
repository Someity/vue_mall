<!--  -->
<template>
  <div class="user-info">
    <div class="left">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="center">
      <div>
        <div class="login">登录/注册</div>
        <div class="text">
          <img src="~assets/img/profile/phone.svg" alt="" />
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="~assets/img/common/arrow-left.svg" alt="" />
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
.user-info {
  display: flex;
  padding: 30px 15px 15px 15px;
  width: 100%;
 
  background-color: var(--color-tint);
  color: #fff;
}

.left {
  flex: 1;
}
.left img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.center {
  flex: 3;
  position: relative;
}
.center  > div {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.center  > div .login {
  font-weight: bold;
}
.center  > div .text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
}
.center img {
  width: 20px;
}
.right {
  flex: 1;
  text-align: right;
}
.right img {
  width: 20px;
  height: 20px;
  position: relative;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
}
</style>