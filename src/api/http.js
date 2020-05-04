import { create } from 'axios'
import { setToken, getToken } from '../services/'

const http = create({
  baseURL: process.env.REACT_APP_API_URL
})

http.interceptors.response.use((response) => {
  if (response && response.data && response.data.accessToken) {
    setToken(response.data.accessToken)
  }
  return response.data
})

http.interceptors.request.use((config) => {
  const token = getToken()

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
