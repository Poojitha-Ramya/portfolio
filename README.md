# Chipurupalli Poojitha Ramya — Portfolio

A production-ready portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Dark theme with violet-pink accent color.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout with metadata/SEO
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Fixed nav with scroll effect + mobile menu
│   ├── Hero.tsx           # Hero section with CTA buttons
│   ├── About.tsx          # About + stats + background card
│   ├── Skills.tsx         # 8-category tech stack grid
│   ├── Projects.tsx       # 4 project cards with GitHub links
│   ├── Experience.tsx     # Work timeline + Education + Certifications
│   ├── Contact.tsx        # Contact links + mailto form
│   └── Footer.tsx         # Footer
├── public/
│   ├── cv.pdf             # ← Place your CV here
│   └── resume.pdf         # ← Place your resume PDF here
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── vercel.json
└── README.md
```

---

## 📄 Adding Your PDF Resume & CV

Place your files in the `public/` folder:
- `public/resume.pdf`
- `public/cv.pdf`

The **Resume** and **View CV** buttons in the Hero section will automatically link to them.

---

## 🌐 Deploy on Vercel (Recommended)

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com) → **Add New Project**
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Connect Custom Domain** *(optional)*
   - In Vercel dashboard → Project → **Settings → Domains**
   - Add your domain (e.g., `poojitharamya.dev`)
   - Update your domain registrar's DNS with the provided nameservers

---

## 🔧 Environment Variables

No environment variables required for the default setup.

If you use **Formspree** for the contact form, add:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```
Then update `Contact.tsx` to POST to `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`.

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Name, title, tagline | `components/Hero.tsx` |
| About text & stats | `components/About.tsx` |
| Tech skills | `components/Skills.tsx` |
| Projects | `components/Projects.tsx` |
| Work & education | `components/Experience.tsx` |
| Certifications | `components/Experience.tsx` |
| Contact info | `components/Contact.tsx` |
| Accent color | `app/globals.css` → `--accent` |
| SEO metadata | `app/layout.tsx` |

---

## 🎨 Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#080810` | Page background |
| `--bg2` | `#0e0e1a` | Alternate sections |
| `--card` | `#111120` | Cards |
| `--accent` | `#c855f0` | Violet-pink primary |
| `--accent2` | `#e040fb` | Hover state |
| `--pink` | `#f472b6` | Secondary accent |
| `--muted` | `#9090b0` | Muted text |

---

Built by Chipurupalli Poojitha Ramya · 2025
