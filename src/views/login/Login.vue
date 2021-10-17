<template>
  <div>
    <nav-bar>
      <div slot="left" @click="Previous">
        <img src="~assets/img/common/back.svg" />
      </div>
    </nav-bar>
    <!-- 表单 -->
    <div class="login_box">
      <div class="login_titie">用户登录</div>
      <el-form
        ref="loginFormRef"
        label-width="0px"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-set-up"
            placeholder="请输入登录密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="warning" @click="registered">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getlogin } from "network/login";
export default {
  name: "Login",
  components: { NavBar },
  directives: {},
  data() {
    return {
      // 登录数据对象
      loginForm: {
        username: "",
        password: "",
      },
      // 表单验证
      loginFormRules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    Previous() {
      this.$router.go(-1);
    },
    registered() {
      this.$router.push("/registered");
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        getlogin(this.loginForm).then((res) => {
          if (res.meta.status !== 200) return this.$message.error("登录失败");
          this.$message({
            message: "登录成功",
            offset: 150,
            type: "success",
          });
          this.$bus.$emit("loginsuss", res);
          //  将token的值保存在sessionStorage
          window.sessionStorage.setItem("token", res.data.token);
          //  通过编程式导航将页面跳转到主页
          this.$router.push("/home");
        });
      });
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: var(--color-background);
}
.nav-bar img {
  margin-top: 12px;
}
.login_titie {
  padding: 40px 40px;
  font-family: 700;
  font-size: 20px;
}
.login_box {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  /* padding: 20px; */
}
.btns {
  text-align: right;
}
</style>