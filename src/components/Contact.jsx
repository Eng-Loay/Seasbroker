import { useApp } from '../context/AppContext'
import Icon from './Icon'
import './Contact.css'

export default function Contact() {
  const { t } = useApp()

  return (
    <footer id="contact" className="contact">
      <div className="contact__panel">
        <div className="contact__content">
          <img className="contact__logo" src="/assets/logo.png" alt={t.meta.logoAlt} />

          <div className="contact__grid">
            <div className="contact__item">
              <Icon name="headquarters" className="contact__icon" />
              <div>
                <h3>{t.contact.headquarters}</h3>
                <p>{t.contact.location}</p>
              </div>
            </div>

            <div className="contact__item">
              <Icon name="email" className="contact__icon" />
              <div>
                <h3>{t.contact.email}</h3>
                <p>
                  <a href="mailto:info@seasbroker.com">info@seasbroker.com</a>
                </p>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__icon contact__icon--spacer" aria-hidden="true" />
              <div>
                <h3>{t.contact.officeHours}</h3>
                <p>{t.contact.hoursLine1}</p>
                <p>{t.contact.hoursLine2}</p>
              </div>
            </div>

            <div className="contact__item">
              <Icon name="phone" className="contact__icon" />
              <div>
                <h3>{t.contact.phone}</h3>
                <p>
                  <a href="tel:+20123456789">+20123456789</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__image">
          <img src="/assets/contact-ship.png" alt={t.contact.imageAlt} />
        </div>
      </div>
    </footer>
  )
}
