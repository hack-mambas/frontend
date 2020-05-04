import http from './http'

import { useQuery } from 'react-query'

const URL = `/auth`

export function auth({ username, senha }) {
  return http.post(`${URL}`, { username, senha })
}

export function useQueryGetAuth() {
  return useQuery('get-auth', async () => {
    const { data } = await http.get(`${URL}`)
    return data
  })
}
