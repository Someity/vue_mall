// 导入axios
import Axios from 'axios'

// 简单封装aixos
export function request(config) {
  const axios = Axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  // 请求拦截器
  axios.interceptors.request.use(config => {
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

