import axios from 'axios'
import NProgress from 'nprogress'// 请求进度条
import 'nprogress/nprogress.css'
let baseUrl = process.env.API_URL // 定义基本baseUrl
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  NProgress.start()// 开始加载进度条
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  NProgress.done()// 结束加载进度条
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export const GET = (url, params) => {
  return axios.get(`${baseUrl}${url}`, {params: params}).then(data => data)
}

export const POST = (url, params) => {
  return axios.post(`${baseUrl}${url}`, params).then(data => data)
}
