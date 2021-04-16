import Vue from 'vue'
import VueRouter from 'vue-router'
//  懒加载方式导入模块

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () =>
    import('views/cart/Cart')
const Profile = () =>
    import('views/profile/Profile')

// 1、安装插件
Vue.use(VueRouter)

// 2、创建router实例 
const routes = [{
    path: '',
    // 重定向
    redirect: '/home'
},
{
    path: '/home',
    component: Home
},
{
    path: '/category',
    component: Category
},
{
    path: '/cart',
    component: Cart
},
{
    path: '/profile',
    component: Profile
},
]
const router = new VueRouter({
    routes,
    // 路由模式
    mode: 'history'
});
// 3、 导出
export default router