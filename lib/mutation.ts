import authFetcher from './fetcher'
import { UserInputAuth } from '../type'

export const auth = (mode: 'signin' | 'signup', body: UserInputAuth) =>
  authFetcher(`/${mode}`, body)
