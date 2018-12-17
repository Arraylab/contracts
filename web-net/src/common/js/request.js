import axios from 'axios'
import Vue from 'vue'
// create an axios instance


const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    //console.log('request')
    return config
  },
  error => {
    console.log('err' + error)
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status == 1021) {
      let toast = Vue.component('cube-toast')
      res.info = '已过期，请退出任务墙重新进入'
      toast.extendOptions.$create({
        time: 300000,
        type: 'warn',
        mask: true,
        txt: res.info
      }).show()
      sessionStorage.removeItem('login')
      return Promise.reject(res)
    }
    if (res.status == 1 || res.success == 1) {
      return response.data
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
