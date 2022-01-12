import { authFetcher } from './fetcher'
import { UserInputAuth } from '../types/user'

export const auth = (mode: 'signin' | 'signup', body: UserInputAuth) =>
  authFetcher(`/${mode}`, body)
