import { useEffect, useRef } from 'react'
import './Education.css'

const EDUCATION = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Birla Institute of Technology and Science, Pilani',
    via: 'via NIAT',
    period: '2024 – 2028',
    grade: 'CGPA: 8.9 / 10',
    status: 'Ongoing',
    icon: '🎓',
    color: 'violet',
    highlights: [
      'Computer Science foundations',
      'Data Structures & Algorithms',
      'Web Development',
      'Database Management',
    ],
  },
  {
    degree: 'Intermediate — MPC',
    institution: 'Narayana Junior College',
    period: '2022 – 2024',
    grade: '87%',
    status: 'Completed',
    icon: '📚',
    color: 'pink',
    highlights: [
      'Mathematics, Physics & Chemistry',
      'Strong analytical foundation',
      'Problem-solving skills',
    ],
  },
]

export default function Education() {
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
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="education" ref={sectionRef} aria-label="Education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// education</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-divider" />
        </div>

        <div className="education__timeline">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.degree}
              className={`edu-card glass-card reveal`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
              aria-label={`${edu.degree} at ${edu.institution}`}
            >
              <div className={`edu-card__accent edu-card__accent--${edu.color}`} aria-hidden="true" />

              <div className="edu-card__inner">
                <div className="edu-card__icon-wrap" aria-hidden="true">
                  <span className="edu-card__icon">{edu.icon}</span>
                </div>

                <div className="edu-card__content">
                  <div className="edu-card__top">
                    <div>
                      <h3 className="edu-card__degree">{edu.degree}</h3>
                      <p className="edu-card__institution">
                        {edu.institution}
                        {edu.via && <span className="edu-card__via"> {edu.via}</span>}
                      </p>
                    </div>
                    <span className={`edu-card__status edu-card__status--${edu.status === 'Ongoing' ? 'ongoing' : 'done'}`}>
                      {edu.status === 'Ongoing' ? '● Ongoing' : '✓ Completed'}
                    </span>
                  </div>

                  <div className="edu-card__meta">
                    <span className="edu-card__period">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {edu.period}
                    </span>
                    <span className={`edu-card__grade edu-card__grade--${edu.color}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                      {edu.grade}
                    </span>
                  </div>

                  <ul className="edu-card__highlights" aria-label="Key areas">
                    {edu.highlights.map(h => (
                      <li key={h} className={`edu-card__highlight edu-card__highlight--${edu.color}`}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
