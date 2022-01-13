import useSWR from 'swr'
import { dataFetcher } from '../lib/fetcher'
import { UserApiResposive } from '../types/user'

export const useMe = () => {
  const { data, error } = useSWR<UserApiResposive>('/me', dataFetcher)
  return {
    user: data as UserApiResposive,
    isLoading: !data && !error,
    isError: error,
  }
}
