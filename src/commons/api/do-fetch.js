import { API_BASE_URL } from 'commons/constants/env'

const doFetch = async ({ method, body, endpoint, page }) => {
  const params = Object.assign(
    {
      method,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    body && { body: JSON.stringify(body) }
  )
  const url = `${API_BASE_URL}${endpoint}`
  const filters = []
  page && filters.push(["page", page].join("="))
  const fullURL = [url, filters.join(";")].join('?')
  const response = await fetch(fullURL, params)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

export default doFetch
