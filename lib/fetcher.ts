import { UserInputAuth } from '../type'

export default function authFetcher(url: string, data?: UserInputAuth) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? 'GET' : 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
