import http from './http'

import { useQuery } from 'react-query'

const URL = `/auth`

export function useQueryAuth({ email, password }) {
  return useQuery('auth', async () => {
    const { data } = await http.post(`${URL}`, { email, password })
    return data
  })
}

export function useQueryGetAuth() {
  return useQuery('get-auth', async () => {
    const { data } = await http.get(`${URL}`)
    return data
  })
}
