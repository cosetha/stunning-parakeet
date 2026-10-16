const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
  { value: '99%', label: 'Code Quality' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="reveal">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Passionate about building great software</h2>
      </div>

      <div className="about-grid reveal" style={{ transitionDelay: '100ms' }}>
        <div className="about-text">
          <p>
            I'm a full-stack developer based in Jakarta, Indonesia, with a deep passion for creating
            clean, efficient, and user-centric web applications. I thrive at the intersection of
            design and engineering, bringing ideas to life with attention to detail and performance.
          </p>
          <p>
            With experience spanning from early-stage startups to established enterprises, I've
            honed my skills across the full stack — from crafting pixel-perfect interfaces to
            building scalable backend architectures. I believe great software is invisible: it just works.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge through technical writing and mentoring.
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
