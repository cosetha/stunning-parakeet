const stats = [
  { value: '20+', label: 'Public Repos' },
  { value: '4+', label: 'Years Coding' },
  { value: 'Flutter', label: '& Web Tools' },
  { value: 'Jakarta', label: 'Indonesia' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="reveal">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Background and focus</h2>
      </div>

      <div className="about-grid reveal" style={{ transitionDelay: '100ms' }}>
        <div className="about-text">
          <p>
            I am a developer based in Jakarta, Indonesia. Most of my work centers on
            web development, cross-platform utilities, and backend services using Vue.js, Laravel, and Flutter.
          </p>
          <p>
            My projects range from geospatial mapping systems (GIS) and recipe PWAs to
            open-source editor tools for mobile and web.
          </p>
          <p>
            I publish experiments, libraries, and application templates on GitHub,
            covering reactive state management, APIs, and responsive design.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
