const skills = [
  { icon: '⚛️', name: 'React', level: 'Advanced' },
  { icon: '🔷', name: 'TypeScript', level: 'Advanced' },
  { icon: '💚', name: 'Vue.js & Vuex', level: 'Advanced' },
  { icon: '🔺', name: 'Laravel & PHP', level: 'Advanced' },
  { icon: '🎯', name: 'Flutter & Dart', level: 'Advanced' },
  { icon: '⚡', name: 'Vite', level: 'Advanced' },
  { icon: '📱', name: 'PWA & Mobile', level: 'Intermediate' },
  { icon: '🌐', name: 'REST APIs', level: 'Advanced' },
  { icon: '🤖', name: 'Android / Kotlin', level: 'Intermediate' },
  { icon: '🗄️', name: 'MySQL / DB', level: 'Advanced' },
  { icon: '🔀', name: 'Git & Actions', level: 'Advanced' },
  { icon: '🎨', name: 'CSS / Tailwind', level: 'Advanced' },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="reveal">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="section-subtitle">
          A curated set of tools and technologies I use daily to build modern
          web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div
            className="skill-card reveal"
            key={s.name}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-name">{s.name}</div>
            <div className="skill-level">{s.level}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
