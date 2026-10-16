const steps = [
  {
    num: '01',
    title: 'Clone the repository',
    description:
      'Fork or clone this repo to your GitHub account. It comes pre-configured with Vite, React, and TypeScript.',
    code: 'git clone https://github.com/<your-username>/githubpages.git\ncd githubpages\nnpm install',
  },
  {
    num: '02',
    title: 'Customize your site',
    description:
      'Edit the React components in src/components/ to make it your own. Hot module replacement gives you instant feedback.',
    code: 'npm run dev\n# → Open http://localhost:5173',
  },
  {
    num: '03',
    title: 'Configure the base path',
    description:
      'In vite.config.ts, set the base option to match your repository name so assets load correctly on GitHub Pages.',
    code: "// vite.config.ts\nexport default defineConfig({\n  base: '/<repo-name>/',\n})",
  },
  {
    num: '04',
    title: 'Push and deploy',
    description:
      'Push to the main branch. The included GitHub Actions workflow will automatically build and deploy to GitHub Pages.',
    code: 'git add .\ngit commit -m "deploy: update portfolio"\ngit push origin main\n# → GitHub Actions takes it from here 🚀',
  },
]

export default function Steps() {
  return (
    <section className="section steps" id="steps">
      <div className="reveal">
        <p className="section-label">// Deployment</p>
        <h2 className="section-title">Four steps to production</h2>
        <p className="section-subtitle">
          From zero to a live GitHub Pages site in under five minutes. No
          server configuration required.
        </p>
      </div>

      <div className="steps-list">
        {steps.map((s, i) => (
          <div
            className="step-item reveal"
            key={s.num}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="step-number">{s.num}</div>
            <div className="step-content">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="step-code">{s.code}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
