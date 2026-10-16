# 🚀 GitHub Pages — Vite + React + TypeScript

A production-ready starter template for deploying a React application to **GitHub Pages** using **GitHub Actions**.

![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github&logoColor=white)

---

## ✨ Features

- ⚡ **Vite** — Lightning-fast dev server & optimized production builds
- ⚛️ **React 19** — Latest React with TypeScript
- 🔷 **TypeScript** — Full type safety
- 🚀 **GitHub Actions** — Automated CI/CD deployment
- 🎨 **Premium UI** — Dark theme, glassmorphism, micro-animations
- 📱 **Responsive** — Works on all screen sizes

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- A GitHub repository with Pages enabled

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/githubpages.git
cd githubpages
npm install
```

### 2. Develop Locally

```bash
npm run dev
# → http://localhost:5173
```

### 3. Configure Base Path

In [`vite.config.ts`](./vite.config.ts), update the `base` option to match your repository name:

```ts
export default defineConfig({
  base: '/<your-repo-name>/',
})
```

> **Note:** If deploying to `https://<username>.github.io/` (user/org site), set `base: '/'`.

### 4. Enable GitHub Pages

1. Go to your repo **Settings → Pages**
2. Under **Build and deployment**, set Source to **GitHub Actions**
3. Push to `main` — the workflow handles the rest!

## 📁 Project Structure

```
githubpages/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CodePreview.tsx     # YAML workflow preview
│   │   ├── Features.tsx        # Tech stack cards
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── Navbar.tsx          # Sticky navigation
│   │   └── Steps.tsx           # Deployment guide
│   ├── App.tsx                 # Root component
│   ├── index.css               # Global styles & design system
│   └── main.tsx                # React entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🛠 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |

## 📄 License

MIT — Feel free to use this as a starting point for your own projects.
