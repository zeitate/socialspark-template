# SocialSpark — Social/Influencer Marketing Landing (React + Tailwind + Framer Motion + Dark Mode)

**SocialSpark** is a vibrant landing page for social agencies, influencer platforms, or social analytics tools. Built with **React 18 + Vite**, **Tailwind CSS**, **Framer Motion**, and a **dark mode toggle** that persists to `localStorage`.

## Features
- Animated hero and section reveals (Framer Motion)
- Light/Dark theme toggle (class-based, persisted)
- Sections: Hero, Features, Creator Grid, Analytics, Pricing, CTA, Footer
- GitHub Pages–ready (`vite.config.js` + `deploy` script)

## Quick Start
```bash
npm install
npm run dev
```

## Build & Deploy to GitHub Pages
```bash
npm run build
export GH_PAGES=1
npm run deploy
# or: npx gh-pages -d dist
```

> If your repo name differs from `socialspark-react`, update the `base` in `vite.config.js`.

## Project Structure
```
socialspark-react/
├─ public/images/{hero.png,creators.png,analytics.png}
├─ src/{App.jsx, main.jsx, index.css, components/ThemeToggle.jsx}
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ README.md
├─ LICENSE.txt
└─ preview/screenshots/*.png
```

## License
This template is provided for commercial sale by you. Replace with your marketplace license text.
