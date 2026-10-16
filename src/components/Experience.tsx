const experiences = [
  {
    date: '2023 - Present',
    role: 'Frontend & Mobile Development',
    company: 'Independent & Open Source',
    description:
      'Developing cross-platform tools and web applications using Flutter, Dart, and modern JavaScript frameworks.',
  },
  {
    date: '2021 - 2023',
    role: 'Full-Stack Web Developer',
    company: 'Client & Web Projects',
    description:
      'Built spatial information systems, admin dashboards, and booking applications with Laravel, Blade, and Vue.js.',
  },
  {
    date: '2020 - 2021',
    role: 'Frontend Developer',
    company: 'Single Page Apps & PWAs',
    description:
      'Created single-page applications and offline-ready recipe PWAs using Vue.js, Vuex state management, and REST APIs.',
  },
  {
    date: '2019 - 2020',
    role: 'Junior Developer',
    company: 'Early Projects & Studies',
    description:
      'Started building responsive web layouts, calculators, and authentication flows on Android and the web.',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="reveal">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Timeline</h2>
        <p className="section-subtitle">
          Key development milestones across open source, client work, and personal projects.
        </p>
      </div>

      <div className="timeline reveal" style={{ transitionDelay: '100ms' }}>
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.date}>
            <div className="timeline-dot" />
            <span className="timeline-date">{exp.date}</span>
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-company">{exp.company}</p>
            <p className="timeline-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
