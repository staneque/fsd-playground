import { useQuery } from '@tanstack/react-query'
import { POKE_API } from 'shared/config/api'
import axios from 'axios'

export interface Poke {
  name: string
}

export const usePoke = (pokeName: string) => {
  const poke = useQuery({
    queryKey: [pokeName],
    queryFn: ({ signal }) => {
      const request = axios
        .get(POKE_API + '/pokemon/' + pokeName, {
          signal,
        })
        .then(res => res.data)

      return request
    },
    staleTime: 5555,
    gcTime: 5000, // "Garbage Collection" time default 5000
    retry: 0,
    enabled: true,
  })

  return poke
}
