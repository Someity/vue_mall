import Vue from "vue";
import VueRouter from "vue-router";
//  懒加载方式导入模块

const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");
const Login = () => import("views/login/Login");
const Registered = () => import("views/login/registered");
// 1、安装插件
Vue.use(VueRouter);

// 2、创建router实例
const routes = [
  {
    path: "",
    // 重定向
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/registered",
    component: Registered
  }
];

const router = new VueRouter({
  routes,
  // 路由模式
  mode: "history",
  base: "/vue_mall/"
});
// 3、 导出
export default router;
