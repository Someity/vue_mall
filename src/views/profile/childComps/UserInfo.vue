<!--  -->
<template>
  <div class="user-info">
    <div class="left">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div v-if="!user" class="center">
      <div>
        <div class="login" @click="login">登录|注册</div>
        <!-- <div class="text">
          <img src="~assets/img/profile/phone.svg" alt="" />
          <span>暂无绑定手机号</span>
        </div> -->
      </div>
    </div>
    <div class="center" v-else>
      <div>
        <div class="login" @click="login">{{user.username}}</div>
        <div class="text">
          <img src="~assets/img/profile/phone.svg" alt="" />
          <span>已绑定手机号</span>
        </div>
        <!-- <el-button type="primary" @click="login">登陆</el-button> -->

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
    return {
      user: "",
    };
  },
  computed: {},
// 进入页面时触发
  activated() {
    this.$bus.$on("loginsuss", (res) => {
      this.user = res.data;
    });
    // console.log(this.user);
  },

  methods: {
    login() {
      // if(window.sessionStorage.getItem('login')){
      //   this.user = window.sessionStorage.getItem('login')
      // }
      // console.log(window.sessionStorage.getItem('login'));
      this.$router.push("/login");
    },
  },
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
.center > div {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.center > div .login {
  font-weight: 700;
}
.center > div .text {
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