export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Deployed on GitHub Pages
      </div>

      <h1 className="hero-title">
        Ship beautiful sites
        <br />
        <span className="hero-title-gradient">to GitHub Pages</span>
      </h1>

      <p className="hero-description">
        A production-ready starter powered by React, TypeScript &amp; Vite — 
        with automated GitHub Actions deployment. Clone, customize, and deploy in minutes.
      </p>

      <div className="hero-actions">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          id="btn-get-started"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          View on GitHub
        </a>
        <a href="#steps" className="btn btn-secondary" id="btn-learn-more">
          Learn How →
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
