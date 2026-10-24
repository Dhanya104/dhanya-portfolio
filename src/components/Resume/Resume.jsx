import { useEffect, useRef } from 'react'
import './Resume.css'

export default function Resume() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" className="resume" ref={sectionRef} aria-label="Resume download">
      <div className="container">
        <div className="resume__card glass-card reveal">
          <div className="resume__glow" aria-hidden="true" />

          <div className="resume__icon-wrap" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>

          <div className="resume__content">
            <h2 className="resume__title section-title">
              Download My Resume
            </h2>
            <p className="resume__desc">
              Get a complete overview of my education, projects, skills, and background in a single PDF.
            </p>

            {/* Primary download button */}
            <a
              href="/Dhanya_Sri_Resume.pdf"
              download="Dhanya_Sri_Resume.pdf"
              className="btn btn-primary resume__btn"
              aria-label="Download Dhanya Sri's resume as PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume (PDF)
            </a>

            {/* Notice about PDF placement */}
            <div className="resume__notice" role="note" aria-label="Setup note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>
                <strong>Setup required:</strong> Place your PDF named{' '}
                <code>Dhanya_Sri_Resume.pdf</code> inside the{' '}
                <code>public/</code> folder of this project to enable the download.
              </span>
            </div>
          </div>

          <div className="resume__highlights" aria-label="Resume highlights">
            {[
              { icon: '🎓', label: 'Education', value: 'BITS Pilani · CGPA 8.9' },
              { icon: '💻', label: 'Projects', value: '2+ Live Deployed' },
              { icon: '🛠️', label: 'Skills', value: '12+ Technologies' },
              { icon: '📍', label: 'Seeking', value: 'SDE / Web Internship' },
            ].map(item => (
              <div key={item.label} className="resume__highlight">
                <span className="resume__highlight-icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <div className="resume__highlight-label">{item.label}</div>
                  <div className="resume__highlight-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
