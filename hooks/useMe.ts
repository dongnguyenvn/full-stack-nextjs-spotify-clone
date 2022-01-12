import useSWR from 'swr'
import { userFetcher } from '../lib/fetcher'
import { UserApiResposive } from '../types/user'

export const useMe = () => {
  const { data, error } = useSWR<UserApiResposive>('/me', userFetcher)
  return {
    user: data as UserApiResposive,
    isLoading: !data && !error,
    isError: error,
  }
}
