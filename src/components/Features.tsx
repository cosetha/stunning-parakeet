const features = [
  {
    icon: '⚡',
    color: 'violet',
    title: 'Vite',
    description:
      'Lightning-fast HMR and optimized builds. Sub-second dev server startup and instant module replacement.',
  },
  {
    icon: '⚛️',
    color: 'cyan',
    title: 'React 19',
    description:
      'Build with the latest React features — Server Components, Actions, and the improved rendering pipeline.',
  },
  {
    icon: '🔷',
    color: 'rose',
    title: 'TypeScript',
    description:
      'Full type safety out of the box. Catch errors at compile time and enjoy superior editor intelligence.',
  },
  {
    icon: '🚀',
    color: 'amber',
    title: 'GitHub Actions',
    description:
      'Automated CI/CD pipeline. Push to main and your site is live on GitHub Pages within seconds.',
  },
]

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="reveal">
        <p className="section-label">// Tech Stack</p>
        <h2 className="section-title">Built with modern tools</h2>
        <p className="section-subtitle">
          A carefully chosen stack that gives you the best developer experience
          with zero-config deployment to GitHub Pages.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div
            className="feature-card reveal"
            key={f.title}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={`feature-icon ${f.color}`}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
