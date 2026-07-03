import { useApp } from '../context/AppContext'
import Icon from './Icon'
import './About.css'

export default function About() {
  const { t } = useApp()

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <p className="about__label">{t.about.label}</p>
        <h2 className="about__title">{t.about.title}</h2>

        <div className="about__grid">
          <div className="about__image-wrap">
            <img src="/assets/about-ship.png" alt={t.about.imageAlt} />
          </div>

          <div className="about__text">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about__highlights">
          {t.about.highlights.map((item) => (
            <div key={`${item.title}-${item.subtitle}`} className="about__highlight">
              <Icon name={item.icon} className="about__highlight-icon" />
              <div>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
