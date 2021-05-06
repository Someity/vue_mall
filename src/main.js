import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 弹出框
import toast from 'components/common/toast'
// 移动端点击延迟
import FastClick from 'fastclick'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
// 事件中心
Vue.prototype.$bus = new Vue

//注册全局组件 安装toast插件（弹出提示框）
Vue.use(toast);

// 解决移动端三百毫秒延迟
FastClick.attach(document.body) 

// 使用图片懒加载插件
Vue.use(VueLazyLoad,{
    // loading:'require(占位符路径)'
});

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')