import {http} from './http'
//请求登录模块的数据
export function getlogin(params) {
  return http({
    url:'login',
    params
  })
}
export function Registered(params) {
  return http.post({
    url:'/users',
    params
  })
}