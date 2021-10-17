// 导入axios
import Axios from 'axios'

// 简单封装aixos
export function http(config) {
  const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1/',
    timeout: 5000
  })
  // 请求拦截器
  axios.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  }, err => {
    return err
  })
  // 响应拦截器
  axios.interceptors.response.use(config => {
    return config.data
  }, err => {
    return err
  })
  // 发送网络请求
  return axios(config)
}
