import { useApp } from '../context/AppContext'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  const { t } = useApp()

  return (
    <section className="why">
      <div className="why__inner">
        <h2 className="section-title section-title--start">{t.whyChooseUs.title}</h2>
        <ul className="why__list">
          {t.whyChooseUs.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
