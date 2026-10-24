import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TYPED_STRINGS = [
  'Frontend Developer',
  'SDE Intern Aspirant',
  'Problem Solver',
  'Web App Builder',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentString = TYPED_STRINGS[stringIndex]

    if (!deleting && charIndex === currentString.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800)
      return
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setStringIndex(prev => (prev + 1) % TYPED_STRINGS.length)
      return
    }

    const speed = deleting ? 40 : 80
    timeoutRef.current = setTimeout(() => {
      setDisplayText(currentString.slice(0, charIndex + (deleting ? -1 : 1)))
      setCharIndex(prev => prev + (deleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeoutRef.current)
  }, [charIndex, deleting, stringIndex])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
        <div className="hero__orb hero__orb--3" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__greeting" aria-hidden="true">
            <span className="hero__greeting-wave">👋</span> Hello, I&apos;m
          </span>

          <h1 className="hero__name">
            <span className="hero__name-first">Dhanya</span>{' '}
            <span className="hero__name-last">Sri</span>
          </h1>

          <div className="hero__typed" aria-label={`I am a ${displayText}`}>
            <span className="hero__typed-prefix">I&apos;m a </span>
            <span className="hero__typed-text" aria-live="polite">{displayText}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero__intro">
            Computer Science student at <strong>BITS Pilani (via NIAT)</strong>, passionate about
            building responsive web applications, solving problems, and learning new technologies.
            Currently seeking <strong>SDE Internship</strong> opportunities.
          </p>

          <div className="hero__cta">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              aria-label="View my projects"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              View Projects
            </button>

            <button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
              aria-label="Get in touch with me"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get In Touch
            </button>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/Dhanya104"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile (opens in new tab)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/thallam-dhanya-sri"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <div className="hero__avatar-initials">DS</div>
            </div>
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />
            <div className="hero__ring hero__ring--3" />
          </div>

          <div className="hero__badge hero__badge--top">
            <span className="hero__badge-dot" />
            Open to Opportunities
          </div>

          <div className="hero__badge hero__badge--bottom">
            <span className="hero__badge-icon">🎓</span>
            BITS Pilani · CGPA 8.9
          </div>
        </div>
      </div>

      <button
        className="hero__scroll-hint"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <div className="hero__scroll-mouse" aria-hidden="true">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll</span>
      </button>
    </section>
  )
}
