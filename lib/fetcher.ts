import { UserInputAuth } from '../types'

export default function authFetcher(url: string, data : UserInputAuth) {
  return fetch(`${window.location.origin}/api${url}`, {
    method:'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
