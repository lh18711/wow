import axios from 'axios'
// 下面是创建axios实例,通过实例去ajax请求
const instance = axios.create({
  // baseURL: 'https://api.bilibili.com/x',
  timeout: 10000
})
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
  return Promise.resolve(response.data)
}, function (error) {
  console.log('请求失败了...', error)
})
export default instance
