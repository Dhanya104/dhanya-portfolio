# Dhanya Sri — Personal Portfolio

A modern, fully responsive personal portfolio website built with **React + Vite**, featuring:

- 🌙 Dark / ☀️ Light theme toggle with localStorage persistence
- 🎨 Premium dark navy + pink/violet/blue accent design
- 💻 Smooth scroll animations with `IntersectionObserver`
- 📱 Fully responsive — mobile, tablet, and desktop
- ♿ Accessible: semantic HTML, ARIA labels, keyboard navigation, reduced-motion support
- ⚡ Fast: Vite production build, optimized CSS, no bloat

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   └── Dhanya_Sri_Resume.pdf   ← Place your resume PDF here!
├── src/
│   ├── components/
│   │   ├── Navbar/             ← Sticky nav with active section tracking
│   │   ├── Hero/               ← Animated hero with typewriter effect
│   │   ├── About/              ← Intro + stats grid
│   │   ├── Skills/             ← Skill categories + tag cloud
│   │   ├── Projects/           ← Project cards with live links
│   │   ├── Education/          ← Timeline education cards
│   │   ├── Resume/             ← Download section
│   │   ├── Contact/            ← Contact info + validated form
│   │   ├── Footer/             ← Footer with links
│   │   └── ScrollToTop/        ← Floating scroll-to-top button
│   ├── styles/
│   │   └── global.css          ← Design tokens, base styles
│   ├── App.jsx                 ← Theme state management
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📄 Adding Your Resume PDF

Place your PDF at:

```
portfolio/public/Dhanya_Sri_Resume.pdf
```

The download button is already wired — no code changes needed.

---

## 🌐 Deploying to GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Update `vite.config.js` base if deploying to a repo sub-path:
   ```js
   base: '/your-repo-name/',
   ```

4. Run:
   ```bash
   npm run deploy
   ```

---

## ☁️ Deploying to Render (Static Site)

1. Push this repo to GitHub.
2. Go to [render.com](https://render.com) → New → **Static Site**.
3. Connect your GitHub repo.
4. Set:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site**.

---

## ☁️ Deploying to Netlify (Drop)

1. Run `npm run build` to generate the `dist/` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder.
4. Done — instant deploy!

---

## ✅ Things to Verify Before Publishing

| Item | Status |
|---|---|
| Place `Dhanya_Sri_Resume.pdf` in `public/` | ⬜ Pending |
| Verify live project links work (BiologicalE, DailyBasket) | ⬜ Check |
| Update GitHub repo link for portfolio project card | ⬜ When pushed |
| Test contact form opens email client correctly | ⬜ Test |
| Test theme toggle (dark ↔ light) | ✅ Built |
| Test mobile responsiveness | ✅ Built |
| Test keyboard navigation | ✅ Built |

---

## 📧 Contact

**Thallam Yella Sai Dhanya Sri**  
thallamdhanya@gmail.com · +91 9177454223  
[LinkedIn](https://linkedin.com/in/thallam-dhanya-sri) · [GitHub](https://github.com/Dhanya104)
