import {request} from './request'
//请求首页模块的数据
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
// 请求首页商品数据
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
        type,
        page
    }
  })
}

