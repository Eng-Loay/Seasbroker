/**
 * CMS seed data often points to /assets/* on the API host, but those files
 * may not be deployed on the server yet (404). Use bundled local copies instead.
 * Real uploads under /uploads/ are kept as full API URLs.
 */
export function resolveAssetUrl(url, fallback = '') {
  if (!url) return fallback

  if (url.startsWith('/')) return url

  try {
    const parsed = new URL(url)
    const parts = parsed.pathname.split('/').filter(Boolean)
    const filename = parts.at(-1)

    if (filename && parts.includes('assets')) {
      return `/assets/${filename}`
    }

    return url
  } catch {
    return fallback
  }
}
