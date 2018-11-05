import axios from 'axios'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

let axiosInstance = axios.create({
  baseURL: process.env.baseUrl || 'https://api.seminarsaito.com/'
})

// axiosInstance.interceptors.request.use(
//   config => {
//     console.log('call config')
//     config.headers.common['Couter'] = 3
//     return config;
//   }
// )

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
