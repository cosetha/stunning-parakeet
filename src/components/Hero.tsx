import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-status">
            <span className="hero-status-dot" />
            Available for work
          </div>

          <p className="hero-greeting">Hi, I'm cosetha 👋</p>

          <h1>
            I build things
            <br />
            <span className="gradient">for the web.</span>
          </h1>

          <p className="hero-desc">
            Full-stack developer specializing in crafting performant, accessible,
            and beautifully designed web applications. Turning ideas into
            exceptional digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="btn-view-work">
              View My Work
            </a>
            <a href="#contact" className="btn btn-ghost" id="btn-get-in-touch">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/cosetha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="hero-avatar-ring">
            <div className="hero-avatar-inner">
              <span>C</span>
            </div>
          </div>
          <div className="hero-avatar-badge">{'<dev />'}</div>
        </div>
      </div>
    </section>
  )
}
