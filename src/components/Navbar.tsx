import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span>ghPages</span>
        </a>
        <ul className="nav-links">
          <li><a href="#features">Stack</a></li>
          <li><a href="#steps">Deploy</a></li>
          <li><a href="#code">Workflow</a></li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
