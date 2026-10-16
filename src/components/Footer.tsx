export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} ghPages — Built with React, TypeScript &amp; Vite
        </p>
        <div className="footer-links">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <a
            href="https://pages.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Pages
          </a>
          <a
            href="https://github.com/features/actions"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Actions
          </a>
        </div>
      </div>
    </footer>
  )
}
