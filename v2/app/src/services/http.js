import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    config.headers['Authorization'] = `Bearer ${ user.token }`
  }
  return config
}, error => {
  Promise.reject(error)
})

export default http