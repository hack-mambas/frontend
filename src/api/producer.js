import http from './http'

import { useQuery } from 'react-query'

const URL = `/produtor`

export function useQueryPostProducer({ nome, nomeEmpresa, email, senha }) {
  return useQuery('auth', async () => {
    const { data } = await http.post(`${URL}`, { nome, nomeEmpresa, email, senha })
    return data
  })
}
