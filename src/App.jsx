import { useEffect } from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import Clients from './components/Clients'
import Contact from './components/Contact'
import './App.css'

function AppContent() {
  const { t, loading, usingFallback } = useApp()

  useEffect(() => {
    document.title = t.meta.title
  }, [t.meta.title])

  if (loading) {
    return (
      <div className="app-loading" role="status" aria-live="polite">
        <div className="app-loading__spinner" aria-hidden="true" />
        <p>{t.common.loading}</p>
      </div>
    )
  }

  return (
    <>
      {usingFallback && (
        <div className="app-banner" role="status">
          {t.common.fallbackNotice}
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Clients />
      </main>
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
