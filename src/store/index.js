import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters';
// 1、安装插件
Vue.use(Vuex);
const state = {
  //购物车数据
  cartList: []
}
// 2、创建Store对象
const store = new Vuex.Store({
  // 公共数据
  state,
  // 修改state中的状态
  mutations,
  // 复杂操作（插件可跟踪数据性）
  actions,
  // 计算属性
  getters

})

// 3、导出
export default store