import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  addCart(context, payLoad) {
    // 1、查找数组是否有该商品 find方法根据条件（函数）查找返回当前第一个符合条件的 找不到则返回 undefined
    let oldproduct = context.state.cartLict.find(item => item.iid === payLoad.iid)
    // 2、判断 第一次肯定没有数组 所以直接走到else 添加一个count 并将数据添加到cartList中
    if (oldproduct) {
      context.commit(ADD_COUNTER, oldproduct)
    } else {
      payLoad.count = 1
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}