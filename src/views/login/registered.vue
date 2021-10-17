<template>
  <div>
    <nav-bar>
      <div slot="left" @click="Previous">
        <img src="~assets/img/common/back.svg" />
      </div>
    </nav-bar>
    <div class="login_box">
      <div class="login_titie">用户注册</div>
    </div>
    <el-form
      :model="addForm"
      :rules="addFormRules"
      ref="addFormRef"
      label-width="70px"
    >
      <!-- 参数解释 -->
      <!-- 数据绑定 -->
      <!-- 规则绑定集 -->
      <!-- 引用对象 -->
      <!-- 表单文本所占宽度 -->
      <el-form-item label="用户名" prop="username">
        <!-- prop 规则的绑定 addFormRules中的规则 -->
        <el-input v-model="addForm.username"></el-input>
        <!-- v-model 双向绑定 -->
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="addForm.password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="addForm.email"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="addForm.mobile"></el-input>
      </el-form-item>

      <!-- 底部区域 -->
      <el-form-item class="btns">
        <el-button @click="resetLoginForm">重置</el-button>
        <el-button type="primary" @click="addUser"> 确 定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { Registered } from "network/registered";
export default {
  name: "Registered",
  components: { NavBar },
  directives: {},
  data() {
    //  ----------- 自定义校验规则-------
    // 验证邮箱的规则 2带校验的值 3回调函数
    let checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则
      const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // 验证
      if (regEmail.test(value)) {
        // 验证通过
        return cb();
      }
      // 验证失败
      cb(new Error("请输入合法的邮箱"));
    };
    // 验证手机号的规则
    let checkMobile = (rule, value, cb) => {
      const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (reg.test(value)) {
        // 验证通过
        cb();
      }
      // 验证失败
      cb(new Error("请输入合法的手机号码"));
    };
    return {
      // 添加用户的表单数据
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      //添加用户表单验证规则对象
      addFormRules: {
        username: [
          // required：是否为必填项 message：提示信息 trigger：校验时机（blur：鼠标失去焦点后
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名的长度在 3 到 10 个字符之前",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "用户名的长度在 6 到 15 个字符之前",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
      },
      // 用户信息
      user:{
        // 用户 ID
        id:'',
        // 用户角色 ID
        rid:'',
        // 用户名
        username:'',
        // 手机号
        mobile:'',
        // 邮箱
        email:''
      },
      loginForm: {
        username: 'admin',
        password: '123456',
      },
    };
  },
  mounted() {},
  methods: {
    Previous() {
      this.$router.go(-1);
    },
    // 点击按钮添加新用户
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        //  预先验证
        if (!valid) return;
         
        window.sessionStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE2MjI0NDc5OTksImV4cCI6MTYyMjUzNDM5OX0.UPV9Jo5jBwFGjEdmyMRXpWCidYKfu6ufMGnwXTVgnXE')
        //  验证成功
          const { data: res } = await this.$http.post(
          "http://127.0.0.1:8888/api/private/v1/users",
          this.addForm
        );

        if (res.meta.status !== 201) return this.$message.error(res.meta.msg);
        
        console.log(res);
        this.user.id = res.data.id 
        console.log(res.data);
       await this.$http.put(
          `http://127.0.0.1:8888/api/private/v1/users/${this.user.id}/state/true`
        )
        await this.$http.put (
          `http://127.0.0.1:8888/api/private/v1/users/${this.user.id}/role`,{
            rid:30
          }
        )
       
        this.$message.success("添加用户成功");
        //  通过编程式导航将页面跳转到主页
        this.$router.push("/login");
      });
    },
    // 重置表单
    resetLoginForm() {
      // console.log(this);
      // resetFields	对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
      this.$refs.addFormRef.resetFields();
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
  padding: 20px 40px;
  font-family: 700;
  font-size: 20px;
}
.login_box {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.el-form {
  padding: 20px;
}
</style>