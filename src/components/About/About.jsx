import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
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
    <section id="about" className="about" ref={sectionRef} aria-label="About me">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// about_me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <p className="about__lead">
              Hi! I&apos;m <strong>Thallam Yella Sai Dhanya Sri</strong>, a Computer Science student at{' '}
              <strong>Birla Institute of Technology and Science, Pilani</strong> (via NIAT), currently
              maintaining a CGPA of <strong>8.9/10</strong>.
            </p>

            <p>
              I am passionate about <strong>frontend development</strong>, <strong>problem-solving</strong>,
              and building responsive web applications that are both functional and visually engaging.
              I enjoy learning new technologies and finding practical ways to apply them in real projects.
            </p>

            <p>
              I have hands-on experience with tools like <strong>React.js</strong>, <strong>HTML5</strong>,{' '}
              <strong>CSS3</strong>, <strong>JavaScript</strong>, and deployment platforms like <strong>Render</strong>.
              Through my projects, I&apos;ve practiced Git-based version control, responsive mobile-first design,
              and working with REST APIs.
            </p>

            <p>
              I am actively looking for <strong>Software Development Engineer (SDE) Internship</strong> and{' '}
              <strong>Web Development Internship</strong> opportunities where I can contribute, grow, and
              collaborate with experienced teams.
            </p>

            <div className="about__links">
              <a
                href="mailto:thallamdhanya@gmail.com"
                className="about__link"
                aria-label="Send me an email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                thallamdhanya@gmail.com
              </a>
              <a
                href="tel:+919177454223"
                className="about__link"
                aria-label="Call me"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.94a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.83 16.92z"/>
                </svg>
                +91 9177454223
              </a>
            </div>
          </div>

          <div className="about__stats reveal">
            <div className="about__stat glass-card">
              <div className="about__stat-value gradient-text">8.9</div>
              <div className="about__stat-label">CGPA / 10</div>
              <div className="about__stat-sub">BITS Pilani</div>
            </div>

            <div className="about__stat glass-card">
              <div className="about__stat-value gradient-text">87%</div>
              <div className="about__stat-label">Intermediate</div>
              <div className="about__stat-sub">MPC — 2024</div>
            </div>

            <div className="about__stat glass-card">
              <div className="about__stat-value gradient-text">2+</div>
              <div className="about__stat-label">Projects</div>
              <div className="about__stat-sub">Live Deployed</div>
            </div>

            <div className="about__stat glass-card">
              <div className="about__stat-value gradient-text">12+</div>
              <div className="about__stat-label">Technologies</div>
              <div className="about__stat-sub">Learned & Applied</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
