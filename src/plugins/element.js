import Vue from 'vue';
import { Button,Input,Form ,FormItem,Message,MessageBox} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
    // 将弹窗组件挂载到vue的原型身上实现全局访问
    Vue.prototype.$message = Message
    // 将MessageBox组件挂载到vue的原型身上实现全局访问
Vue.prototype.$confirm = MessageBox.confirm