import { createContext, useContext, useEffect, useState } from 'react'
import { fetchContent } from '../api/content'
import { mapApiToTranslations, mapStaticFallback, mergeWithUi } from '../api/mapContent'
import { translations } from '../i18n'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setUsingFallback(false)

    fetchContent(lang)
      .then((data) => {
        if (!cancelled) {
          setContent(mapApiToTranslations(data))
        }
      })
      .catch(() => {
        if (!cancelled) {
          setContent(mapStaticFallback(translations[lang], lang))
          setUsingFallback(true)
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'en' ? 'ar' : 'en'))
  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  const t = content ? mergeWithUi(content, lang) : mergeWithUi(mapStaticFallback(translations[lang], lang), lang)

  return (
    <AppContext.Provider
      value={{
        lang,
        theme,
        setLang,
        setTheme,
        toggleLang,
        toggleTheme,
        t,
        loading,
        usingFallback,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
