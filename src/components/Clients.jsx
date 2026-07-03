import { useApp } from '../context/AppContext'
import './Clients.css'

export default function Clients() {
  const { t } = useApp()

  return (
    <section className="clients">
      <div className="clients__inner">
        <h2 className="section-title section-title--start">{t.clients.title}</h2>
        <div className="clients__grid">
          {t.clients.items.map((client) => (
            <div key={client.name} className="clients__logo">
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
