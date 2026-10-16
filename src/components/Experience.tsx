const experiences = [
  {
    date: '2023 — Present',
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    description:
      'Leading the frontend architecture for a B2B SaaS platform. Introduced a component library that reduced development time by 40%. Mentoring a team of 4 junior developers.',
  },
  {
    date: '2021 — 2023',
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    description:
      'Built the core product from MVP to production serving 50K+ users. Owned the full stack — React frontend, Node.js APIs, and PostgreSQL database. Implemented CI/CD pipelines with GitHub Actions.',
  },
  {
    date: '2020 — 2021',
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    description:
      'Developed responsive web applications for clients across e-commerce, healthcare, and fintech. Delivered 15+ projects on time with a focus on performance and accessibility.',
  },
  {
    date: '2019 — 2020',
    role: 'Junior Web Developer',
    company: 'WebStudio',
    description:
      'Started my career building WordPress sites and custom landing pages. Quickly transitioned to React and modern JavaScript tooling.',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="reveal">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>
        <p className="section-subtitle">
          A timeline of my professional journey, from first lines of code to
          leading engineering teams.
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
