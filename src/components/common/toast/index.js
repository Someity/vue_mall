// 将对话框挂在到vue上 之后全局就可以使用了  this.$toast.show(信息数据,消失时间)
import Toast from './Toast'

export default {
  install(Vue) {
    // 1、创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    // 2、new的方式，根据组件构造器，可以创建一个组件对象
    const toast = new toastContrustor()
    // 3、将组件对象手动挂在到某一个元素上
    toast.$mount(document.createElement('div'))
    // 4、toast.$el 对应的就是div
    document.body.appendChild(toast.$el)
  //  挂在到vue实例中
    Vue.prototype.$toast = toast
  }
};