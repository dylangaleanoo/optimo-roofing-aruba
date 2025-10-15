# Optimo Roofing Aruba – Website (React + Tailwind)

## Quick start
```bash
npm install
npm run dev
```

## Deploy
Vercel/Netlify. Framework: Vite, Build: `npm run build`, Output: `dist`.

Logo path: `public/assets/optimo-logo.png` (included).
Page title: **Optimo Roofing Aruba | Roofs Built Right**

## Contact form (Formspree)

This project is pre-wired to POST to **Formspree**. To enable:
1. Create a free Formspree form at https://formspree.io
2. Copy your endpoint (looks like `https://formspree.io/f/xxxxxx`)
3. Open `src/site.jsx` and set:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/xxxxxx";
   ```
4. Deploy. Submissions will arrive at your email/dashboard.

### Alternatives
- **Netlify Forms** (if deploying on Netlify): add `data-netlify="true"` to the `<form>` and include a hidden `name` input.
- **Basin** or **Getform**: replace `FORM_ENDPOINT` with their endpoint URL.
