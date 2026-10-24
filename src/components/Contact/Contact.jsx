import { useState, useRef, useEffect } from 'react'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'thallamdhanya@gmail.com',
    href: 'mailto:thallamdhanya@gmail.com',
    color: 'pink',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.94a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.83 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 9177454223',
    href: 'tel:+919177454223',
    color: 'violet',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'thallam-dhanya-sri',
    href: 'https://linkedin.com/in/thallam-dhanya-sri',
    color: 'blue',
    external: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'Dhanya104',
    href: 'https://github.com/Dhanya104',
    color: 'cyan',
    external: true,
  },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim()) errs.email = 'Email is required.'
    else if (!validateEmail(form.email)) errs.email = 'Please enter a valid email.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // No backend configured — inform the user and offer mailto fallback
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Dhanya,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:thallamdhanya@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(INITIAL_FORM)
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef} aria-label="Contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// get_in_touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider" />
          <p className="contact__subtitle">
            I&apos;m open to internship opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="contact__grid">
          {/* Info column */}
          <div className="contact__info reveal">
            <h3 className="contact__info-heading">Let&apos;s Connect</h3>
            <p className="contact__info-text">
              Whether you have an internship opportunity, a project idea, or just want to say hello —
              my inbox is always open. I&apos;ll get back to you as soon as I can.
            </p>

            <ul className="contact__details" role="list">
              {CONTACT_INFO.map(info => (
                <li key={info.label}>
                  <a
                    href={info.href}
                    className={`contact__detail contact__detail--${info.color}`}
                    target={info.external ? '_blank' : undefined}
                    rel={info.external ? 'noopener noreferrer' : undefined}
                    aria-label={`${info.label}: ${info.value}${info.external ? ' (opens in new tab)' : ''}`}
                  >
                    <span className={`contact__detail-icon contact__detail-icon--${info.color}`}>
                      {info.icon}
                    </span>
                    <div>
                      <div className="contact__detail-label">{info.label}</div>
                      <div className="contact__detail-value">{info.value}</div>
                    </div>
                    {info.external && (
                      <svg className="contact__external-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form column */}
          <div className="contact__form-wrap glass-card reveal" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="contact__success" role="alert" aria-live="polite">
                <div className="contact__success-icon" aria-hidden="true">✅</div>
                <h3>Opening your email client…</h3>
                <p>
                  Your default email app should open with the message pre-filled. If it doesn&apos;t,
                  email me directly at{' '}
                  <a href="mailto:thallamdhanya@gmail.com">thallamdhanya@gmail.com</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact__form"
                noValidate
                aria-label="Contact form"
              >
                <h3 className="contact__form-heading">Send a Message</h3>

                <div className="contact__disclaimer" role="note">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Submitting will open your email client — no backend is configured.
                </div>

                <div className="form__row">
                  <div className="form__group">
                    <label htmlFor="name" className="form__label">
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form__input ${errors.name ? 'form__input--error' : ''}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span id="name-error" className="form__error" role="alert">{errors.name}</span>
                    )}
                  </div>

                  <div className="form__group">
                    <label htmlFor="email" className="form__label">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form__input ${errors.email ? 'form__input--error' : ''}`}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span id="email-error" className="form__error" role="alert">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form__group">
                  <label htmlFor="subject" className="form__label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form__input"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    autoComplete="off"
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="message" className="form__label">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`form__input form__textarea ${errors.message ? 'form__input--error' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity, project, or just say hi!"
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="message-error" className="form__error" role="alert">{errors.message}</span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary form__submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
