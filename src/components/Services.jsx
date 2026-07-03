import { useApp } from '../context/AppContext'
import Icon from './Icon'
import './Services.css'

export default function Services() {
  const { t } = useApp()

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <h2 className="section-title">{t.services.title}</h2>

        <div className="services__grid">
          {t.services.items.map((service) => (
            <article key={service.title.join(' ')} className="service-card">
              <div className="service-card__header">
                <Icon name={service.icon} className="service-card__icon" />
                <h3>
                  {service.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
              </div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
