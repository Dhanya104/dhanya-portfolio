import { useEffect, useRef } from 'react'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'pink',
    skills: [
      { name: 'HTML5', icon: '📄' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Bootstrap', icon: '🅱️' },
    ],
  },
  {
    category: 'Backend & Tools',
    icon: '🛠️',
    color: 'violet',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
    ],
  },
  {
    category: 'Deployment & CS',
    icon: '🚀',
    color: 'blue',
    skills: [
      { name: 'Render', icon: '☁️' },
      { name: 'Problem Solving', icon: '🧩' },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" className="skills" ref={sectionRef} aria-label="Technical skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// tech_stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider" />
          <p className="skills__subtitle">
            Technologies and tools I work with to build modern web applications.
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={cat.category}
              className={`skills__category glass-card reveal`}
              style={{ transitionDelay: `${catIdx * 0.1}s` }}
            >
              <div className="skills__category-header">
                <span className="skills__category-icon" aria-hidden="true">{cat.icon}</span>
                <h3 className={`skills__category-name skills__category-name--${cat.color}`}>
                  {cat.category}
                </h3>
              </div>

              <ul className="skills__list" role="list">
                {cat.skills.map((skill, skillIdx) => (
                  <li
                    key={skill.name}
                    className="skills__item"
                    style={{ animationDelay: `${skillIdx * 0.08}s` }}
                  >
                    <span className="skills__item-icon" aria-hidden="true">{skill.icon}</span>
                    <span className="skills__item-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* All skills as tags */}
        <div className="skills__tags-section reveal">
          <h3 className="skills__tags-heading">All Technologies</h3>
          <div className="skills__tags" role="list" aria-label="All skill tags">
            {SKILL_CATEGORIES.flatMap(cat => cat.skills).map(skill => (
              <span key={skill.name} className="tag" role="listitem">
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
