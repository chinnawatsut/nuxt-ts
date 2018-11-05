import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: process.env.baseUrl || 'http://www.mocky.io'
})

axiosInstance.interceptors.request.use(
  config => {
    console.log('call config')
    config.headers.common['Couter'] = 3
    return config;
  }
)

axiosInstance.interceptors.request.use(
  response => {
    console.log('Success call')
    return response
  }, 
  error => {
    console.log('Error occur')
    return Promise.reject(error)
  }
)


export default axiosInstance
