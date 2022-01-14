import useSWR from 'swr'
import { dataFetcher } from '../lib/fetcher'
import { PlaylistApiResposive } from '../types/playlist'

export const usePlaylist = () => {
  const { data, error } = useSWR<PlaylistApiResposive[]>(
    '/playlist',
    dataFetcher
  )
  return {
    playLists: (data as PlaylistApiResposive[]) || [],
    isLoading: !data && !error,
    isError: error,
  }
}
