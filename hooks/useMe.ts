import useSWR from 'swr'
import { dataFetcher } from '../lib/fetcher'
import { MeApiResposive } from '../types/user'

export const useMe = () => {
  const { data, error } = useSWR<MeApiResposive>('/me', dataFetcher)
  return {
    me: data as MeApiResposive,
    isLoading: !data && !error,
    isError: error,
  }
}
