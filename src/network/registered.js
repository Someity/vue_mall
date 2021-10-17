import {http} from './http'
//请求注册模块的数据
export function Registered(params) {
  return http({
    url:'/users',
    params
  })
}