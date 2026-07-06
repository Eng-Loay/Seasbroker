import { useApp } from '../context/AppContext'
import ThemeToggle from './ThemeToggle'
import SafeImage from './SafeImage'
import './Navbar.css'

const navLinks = [
  { key: 'home', href: '#home', active: true },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services', dropdown: true },
  { key: 'projects', href: '#projects' },
]

export default function Navbar() {
  const { t, lang, toggleLang } = useApp()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <SafeImage
            src={t.meta.logoUrl}
            fallback="/assets/logo.png"
            alt={t.meta.logoAlt}
          />
        </a>

        <nav className="navbar__nav" aria-label={t.nav.ariaLabel}>
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`navbar__link${link.active ? ' navbar__link--active' : ''}`}
            >
              {t.nav[link.key]}
              {link.dropdown && (
                <svg className="navbar__chevron" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__lang"
            onClick={toggleLang}
            aria-label={lang === 'en' ? t.common.switchToArabic : t.common.switchToEnglish}
          >
            {lang === 'en' ? t.common.switchToArabic : t.common.switchToEnglish}
          </button>
          <ThemeToggle />
          <a href="#contact" className="navbar__contact">
            {t.nav.contact}
          </a>
        </div>
      </div>
    </header>
  )
}
