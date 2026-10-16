import { GithubIcon, ExternalLinkIcon } from './Icons'

const basePath = import.meta.env.BASE_URL

interface ProjectItem {
  year: string
  title: string
  description: string
  image: string
  tags: { label: string; color: string }[]
  github: string
  live?: string
}

const projects: ProjectItem[] = [
  {
    year: '2025',
    title: 'quill_html_editor',
    description:
      'HTML rich text editor for Android, iOS, and Web using the QuillJS library. Provides modern WYSIWYG editing features with seamless cross-platform integration.',
    image: `${basePath}project-ai-chat.jpg`,
    tags: [
      { label: 'Dart', color: 'cyan' },
      { label: 'Flutter', color: 'violet' },
      { label: 'QuillJS', color: 'amber' },
      { label: 'Android / iOS', color: 'emerald' },
    ],
    github: 'https://github.com/cosetha/quill_html_editor',
    live: 'https://pub.dev/packages/quill_html_editor',
  },
  {
    year: '2026',
    title: 'Developer Portfolio (This Site)',
    description:
      'Modern interactive developer portfolio built with React 19, TypeScript, and Vite. Configured with automated GitHub Actions CI/CD to build and publish directly to GitHub Pages on commit push.',
    image: `${basePath}project-dashboard.jpg`,
    tags: [
      { label: 'React', color: 'violet' },
      { label: 'TypeScript', color: 'cyan' },
      { label: 'Vite', color: 'amber' },
      { label: 'GitHub Pages', color: 'emerald' },
    ],
    github: 'https://github.com/cosetha/stunning-parakeet',
    live: 'https://cosetha.github.io/stunning-parakeet/',
  },
  {
    year: '2021',
    title: 'Laravel GIS Platform',
    description:
      'Geographic Information System application built with Laravel and Blade. Features interactive geospatial coordinates mapping, spatial data layering, and administration dashboard.',
    image: `${basePath}project-ecommerce.jpg`,
    tags: [
      { label: 'Laravel', color: 'rose' },
      { label: 'PHP', color: 'violet' },
      { label: 'Blade', color: 'cyan' },
      { label: 'GIS & Maps', color: 'emerald' },
    ],
    github: 'https://github.com/cosetha/laravel-gis',
  },
  {
    year: '2020',
    title: 'Vuex Simple Cinema',
    description:
      'Movie booking and cinema scheduling web app built with Vue.js. Implements centralized reactive state management using Vuex for seamless seat selection, schedule browsing, and cart state.',
    image: `${basePath}project-ai-chat.jpg`,
    tags: [
      { label: 'Vue.js', color: 'emerald' },
      { label: 'Vuex', color: 'cyan' },
      { label: 'JavaScript', color: 'amber' },
      { label: 'SPA', color: 'violet' },
    ],
    github: 'https://github.com/cosetha/VuexSimpleCinema',
  },
  {
    year: '2020',
    title: 'MealDB Recipe PWA',
    description:
      'Progressive Web Application consuming TheMealDB REST API. Includes offline caching with Service Workers, recipe search, categories filtering, and responsive mobile-first UI.',
    image: `${basePath}project-dashboard.jpg`,
    tags: [
      { label: 'Vue.js', color: 'emerald' },
      { label: 'PWA', color: 'violet' },
      { label: 'REST API', color: 'cyan' },
      { label: 'Service Worker', color: 'amber' },
    ],
    github: 'https://github.com/cosetha/pwa-vue-the-mealdb',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="reveal">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Public Repositories &amp; Work</h2>
        <p className="section-subtitle">
          Real projects and open-source contributions published on GitHub.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className="project-card reveal"
            key={p.title}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="project-image">
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="project-image-overlay" />
            </div>

            <div className="project-info">
              <span className="project-year">{p.year}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className={`project-tag ${t.color}`} key={t.label}>
                    {t.label}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <GithubIcon /> Source Code
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLinkIcon /> Live / Package
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a
          href="https://github.com/cosetha?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <GithubIcon /> View All 20+ Repositories on GitHub
        </a>
      </div>
    </section>
  )
}
