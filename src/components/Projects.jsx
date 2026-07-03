import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import './Projects.css'

const PAGE_SIZE = 3

export default function Projects() {
  const { t, lang } = useApp()
  const projects = t.projects.items
  const totalPages = Math.ceil(projects.length / PAGE_SIZE)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(0)
  }, [lang])

  const visible = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <h2 className="section-title">{t.projects.title}</h2>

        <div className="projects__grid">
          {visible.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p className="project-card__client">
                  <span aria-hidden="true">•</span> {project.client}
                </p>
                <p className="project-card__description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__dots" role="tablist" aria-label={t.projects.pagesAriaLabel}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={page === index}
              aria-label={`${t.common.projectPage} ${index + 1}`}
              className={`projects__dot${page === index ? ' projects__dot--active' : ''}`}
              onClick={() => setPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
