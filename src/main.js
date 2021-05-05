import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'


Vue.config.productionTip = false
// 事件中心
Vue.prototype.$bus = new Vue
//注册全局组件 安装toast插件（弹出提示框）
Vue.use(toast);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')