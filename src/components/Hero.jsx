import { useApp } from '../context/AppContext'
import Icon from './Icon'
import './Hero.css'

export default function Hero() {
  const { t } = useApp()

  return (
    <section id="home" className="hero">
      <img className="hero__bg" src="/assets/hero-bg.png" alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__left">
          <p className="hero__eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero__title">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>
          <p className="hero__description">{t.hero.description}</p>
          <div className="hero__actions">
            <a href="#services" className="hero__btn hero__btn--primary">
              {t.hero.exploreServices}
            </a>
            <a href="#projects" className="hero__btn hero__btn--secondary">
              {t.hero.ourProjects}
            </a>
          </div>
        </div>

        <div className="hero__stats">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <Icon name={stat.icon} className="hero__stat-icon" />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
