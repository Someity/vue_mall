import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// 事件中心
Vue.prototype.$bus = new Vue
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')