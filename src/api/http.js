import { create } from 'axios'
import * as authService from '../services/'

const http = create({
  baseURL: process.env.REACT_APP_API_URL
})

http.interceptors.response.use((response) => {
  return response.data
})

http.interceptors.request.use((config) => {
  const token = authService.getToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
