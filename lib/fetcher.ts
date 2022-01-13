import { UserApiResposive, UserInputAuth } from '../types/user'

export function authFetcher(url: string, data?: UserInputAuth) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export async function dataFetcher<JSON = any>(url: string): Promise<JSON> {
  const res = await fetch(`${window.location.origin}/api${url}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}
