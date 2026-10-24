import { useEffect, useRef } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'BiologicalE Ltd Corporate Website',
    description:
      'A fully responsive corporate website for BiologicalE Ltd built with a mobile-first design approach. Implements version control using Git and GitHub, and is live-deployed on Render.',
    features: [
      'Responsive mobile-first UI',
      'Git/GitHub version control workflow',
      'Deployed and hosted on Render',
      'Clean corporate design',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveUrl: 'https://biologicalelimited.onrender.com',
    githubUrl: 'https://github.com/Dhanya104/biologicalEltd',
    color: 'pink',
    icon: '🏢',
  },
  {
    id: 2,
    title: 'Daily Basket Grocery Store',
    description:
      'A responsive grocery store web application featuring product categories and offer sections. Built with Bootstrap for cross-device responsiveness and deployed on Render.',
    features: [
      'Product categories & offer sections',
      'Bootstrap responsive layout',
      'Deployed on Render',
      'Git-based version control',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'GitHub'],
    liveUrl: 'https://dailybasket-grocery-store-7f1l.onrender.com',
    githubUrl: 'https://github.com/Dhanya104/Dailybasket-Grocery-store',
    color: 'violet',
    icon: '🛒',
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description:
      'This very portfolio! A modern, fully responsive personal portfolio built with React and Vite. Features a dark/light theme toggle, smooth animations, and accessible semantic HTML.',
    features: [
      'React + Vite single-page app',
      'Dark / Light theme toggle',
      'Smooth scroll animations',
      'Fully responsive & accessible',
    ],
    tags: ['React.js', 'Vite', 'JavaScript', 'CSS3'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Dhanya104',
    color: 'blue',
    icon: '💼',
    isCurrent: true,
  },
]

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef} aria-label="Projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// my_work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
          <p className="projects__subtitle">
            Real projects built and deployed — click the links to explore them live.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card glass-card reveal`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
              aria-label={`Project: ${project.title}`}
            >
              {/* Card header */}
              <div className={`project-card__header project-card__header--${project.color}`}>
                <span className="project-card__icon" aria-hidden="true">{project.icon}</span>
                {project.isCurrent && (
                  <span className="project-card__badge">✨ This site</span>
                )}
              </div>

              {/* Card body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Features */}
                <ul className="project-card__features" aria-label="Key features">
                  {project.features.map(f => (
                    <li key={f} className="project-card__feature">
                      <span className="project-card__feature-dot" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="project-card__tags" role="list" aria-label="Technologies used">
                  {project.tags.map(tag => (
                    <span key={tag} className={`tag project-card__tag project-card__tag--${project.color}`} role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="project-card__footer">
                {project.isCurrent ? (
                  <span className="project-card__current-note">
                    <span aria-hidden="true">📍</span> You&apos;re viewing it now
                  </span>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary project-card__btn`}
                    aria-label={`View ${project.title} live (opens in new tab)`}
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline project-card__btn"
                  aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                >
                  <GitHubIcon />
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more reveal">
          <a
            href="https://github.com/Dhanya104"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label="View all projects on GitHub (opens in new tab)"
          >
            <GitHubIcon />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
