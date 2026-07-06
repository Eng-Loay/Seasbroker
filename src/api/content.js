const API_URL = import.meta.env.VITE_API_URL

export async function fetchContent(lang) {
  const res = await fetch(`${API_URL}/api/content?lang=${lang}`)
  if (!res.ok) {
    throw new Error(`Content API failed: ${res.status}`)
  }
  return res.json()
}
