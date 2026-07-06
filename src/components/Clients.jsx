import { useApp } from '../context/AppContext'
import SafeImage from './SafeImage'
import './Clients.css'

export default function Clients() {
  const { t } = useApp()

  return (
    <section className="clients">
      <div className="clients__inner">
        <h2 className="section-title section-title--start">{t.clients.title}</h2>
        <div className="clients__grid">
          {t.clients.items.map((client) => (
            <div key={client.id ?? client.name} className="clients__logo">
              <SafeImage src={client.logo} fallback="/assets/logo.png" alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
