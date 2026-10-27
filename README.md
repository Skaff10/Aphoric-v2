<div align="center">

# 🌐 Aphoric

**Strategic brand identities, bespoke web platforms, and automated digital growth engines.**

[![Live Website](https://img.shields.io/badge/Live%20Website-aphoric.org-000000?style=for-the-badge&logo=googlechrome&logoColor=white)](https://aphoric.org)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[**Explore Live Website**](https://aphoric.org) • [**Case Studies**](https://aphoric.org/work) • [**Services & Pricing**](https://aphoric.org/services) • [**About Us**](https://aphoric.org/about) • [**Get in Touch**](https://aphoric.org/contact)

</div>

---

## 📖 Overview

**[Aphoric](https://aphoric.org)** is the official digital flagship and portfolio of **Aphoric**, a modern creative engineering and brand agency based in Dhaka, Bangladesh. 

We partner with ambitious startups, growing brands, and small business owners to craft brand identities that position them as market leaders, coupled with high-conversion web platforms, full-funnel marketing campaigns, and intelligent AI automation workflows.

The web application is designed with an uncompromising minimalist aesthetic—embracing a sleek dark palette (`#141414`), warm stone accents (`#ece8df`), high-contrast typography pairing, and bespoke canvas-driven motion effects.

---

## ⚡ Core Features & Interactive Highlights

### 🎨 1. Bespoke Canvas `PixelImage` Resolution Transition
Instead of conventional fade-ins, project showcases utilize a custom HTML5 Canvas engine ([`PixelImage.tsx`](components/PixelImage.tsx)):
- **Hardware-Accelerated Pixel Sorting**: Starts at blocky resolutions (e.g., 60px pixel blocks) and progressively resolves smoothly into ultra-crisp imagery using an exponential ease-out curve (`easeOutExpo`).
- **Retina & High-DPI Support**: Automatically scales with `window.devicePixelRatio` capped for performance.
- **IntersectionObserver Lazy Execution**: Only triggers fetch and animation when the element crosses the viewport margin, optimizing initial network overhead and perceived speed.
- **Next.js Optimizer Integration**: Routes images through `/_next/image` to preserve AVIF/WebP negotiation while rendering inside a 2D canvas context.

### 🖱️ 2. Dynamic Difference Cursor (`InvertCursor`)
- Custom floating cursor built with **Framer Motion** spring physics (`stiffness: 400, damping: 28`).
- Uses CSS `mix-blend-mode: difference` over dark backgrounds, light headers, and media elements.
- Features pointer detection (`window.matchMedia("(pointer: fine)")`) to cleanly disable on touchscreens and mobile devices.

### 📜 3. Kinetic Typographic Reveals (`ScrollWordReveal`)
- Granular, scroll-driven text masking that lights up words progressively as visitors scroll through agency values and mission statements.

### 🗂️ 4. Dynamic Work & Case Study Architecture
- Multi-dimensional portfolio catalog categorized by `website`, `design`, and `marketing`.
- Detailed case study pages complete with client briefs, technical approaches, architectural diagrams, tech stack breakdowns, and business outcomes.

### 🛠️ 5. Modular Service Tier Selector
- Interactive multi-tab service explorer showcasing deliverables across **Web Development**, **Brand Identity**, **Performance Marketing**, and **AI Automation**.

---

## 💼 Featured Case Studies

Check out all live projects at **[aphoric.org/work](https://aphoric.org/work)**:

| Project | Sector & Scope | Highlights & Stack |
| :--- | :--- | :--- |
| **Down 2 Detail (D2D)** | Auto Detailing (Montreal, QC) · Full Web Platform | Bilingual EN/FR booking engine, real-time Firestore database, Telegram Bot owner notification dispatch, Resend transactional emails, and server-side GA4 tracking via Stape.io. |
| **Oven & Out** | Cloud Kitchen · Brand, Web & Social | Brand repositioning from pizza parlor to cloud kitchen, custom digital ordering menu, dynamic video showcases, and targeted social ad campaigns. |
| **Traken** | Fleet Logistics · Web Platform | High-efficiency responsive logistics web platform with interactive UI and booking workflows. |
| **Pawsome** | Pet Care Services · Web Platform | Modern client portal and service reservation system tailored for pet lifestyle brands. |
| **Terra & June (T&J)** | Brand Identity · Organic Goods | Complete visual identity suite, brand pattern system, typography hierarchy, and packaging guidelines. |
| **Lorem, Merideth & TypeFace** | Brand & Typography Identity Systems | Comprehensive brand books, vector assets, and multi-platform visual identity systems. |

---

## 🛠️ Service Offerings

Browse full tiers and scope on **[aphoric.org/services](https://aphoric.org/services)**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                          APHORIC SERVICE SUITE                         │
├─────────────────┬──────────────────┬─────────────────┬─────────────────┤
│   🌐 WEBSITES   │     🎨 BRAND     │   📈 MARKETING  │ 🤖 AI AUTOMATION│
├─────────────────┼──────────────────┼─────────────────┼─────────────────┤
│ • Presence      │ • Foundation     │ • Starter       │ • Assist        │
│ • Build (CMS)   │ • Identity       │ • Growth        │ • Automate      │
│ • Scale (Admin) │ • Complete Kit   │ • Enterprise    │ • Integrate     │
│ • Dominate      │                  │                 │ • Dominate      │
└─────────────────┴──────────────────┴─────────────────┴─────────────────┘
```

1. **Web Platforms**: From high-speed static landing pages to custom administrative dashboards, CMS integrations (Sanity/custom), booking systems, and e-commerce checkouts (Stripe/PayPal).
2. **Brand & Visual Design**: Logo systems, typographic palettes, vector brand assets, stationery, social media templates, and full brand guidelines.
3. **Performance Marketing**: Full-funnel ad campaigns across Meta, Google, and TikTok with Meta Pixel, Conversion API, and server-side tracking (Stape.io).
4. **AI Automation**: 24/7 autonomous customer support bots (WhatsApp, Web, Instagram), lead capture pipelines, CRM automations (Make.com, n8n), and voice AI agents.

---

## 💻 Tech Stack & Architecture

- **Framework**: [Next.js 16.3](https://nextjs.org/) (App Router, React Server Components)
- **Library**: [React 19.2](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS integration
- **Animation**: [Framer Motion 13](https://www.framer.com/motion/) & HTML5 Canvas 2D
- **Typography**: [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) loading **Erica One** (display headers) & **Poppins** (clean body text)
- **Icons**: [React Icons / Lucide](https://react-icons.github.io/react-icons/)
- **Hosting & Edge Delivery**: [Vercel](https://vercel.com/) with Edge caching & dynamic image optimization

---

## 📁 Repository Structure

```text
aphoric2/
├── app/
│   ├── about/              # Agency philosophy, backstory & mission
│   ├── services/           # Service catalog & tiered package matrix
│   ├── work/               # Portfolio gallery & client case studies
│   │   ├── d2d/            # Down 2 Detail case study
│   │   ├── ovenout/        # Oven & Out case study
│   │   ├── traken/         # Traken platform showcase
│   │   ├── pawsome/        # Pawsome platform showcase
│   │   ├── tj/             # Terra & June brand identity
│   │   ├── lorem/          # Lorem brand identity
│   │   ├── merideth/       # Merideth brand identity
│   │   └── typeface/       # TypeFace brand identity
│   ├── globals.css         # Tailwind v4 theme variables & tokens
│   ├── layout.tsx          # Root layout, typography, global cursor & navigation
│   └── page.tsx            # Main landing page & hero showcases
├── components/
│   ├── Footer.tsx          # Comprehensive footer with quick links & socials
│   ├── GetInTouch.tsx      # High-impact conversion call-to-action banner
│   ├── InvertCursor.tsx    # Smooth spring inverted cursor with blend mode
│   ├── Navbar.tsx          # Responsive navigation bar with mobile drawer
│   ├── PixelImage.tsx      # Custom progressive pixelation canvas engine
│   ├── ProjectGallery.tsx  # Interactive filterable work portfolio view
│   ├── ScrollToBottom.tsx  # Smooth scroll utility trigger
│   └── ScrollWordReveal.tsx# Scroll-linked typographic reveal component
├── data/
│   ├── case-Studies.ts     # Deep case study narratives, problems, & stacks
│   └── workdata.ts         # Central project definitions & categories
├── public/                 # Static assets, WebP project images & SVGs
├── package.json            # Project dependencies and script declarations
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js 18.18+ or 20+ installed on your machine:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Skaff10/Aphoric-v2.git
   cd Aphoric-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot-module reloading |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Boots the Next.js production server |
| `npm run lint` | Runs ESLint to inspect code quality and conventions |

---

## 🎨 Design Tokens & Theme

Defined within [`app/globals.css`](app/globals.css):

```css
@theme {
  --color-primary: #141414;     /* Deep charcoal background */
  --color-secondary: #ece8df;   /* Warm off-white / bone typography */
  --color-text: #aca9a3;        /* Muted neutral subtitle text */
  --font-display: var(--font-erica-one), cursive;
  --font-sans: var(--font-poppins), sans-serif;
  --breakpoint-lg2: 2000px;     /* Ultra-wide display support */
}
```

---

## 📬 Contact & Connect

Ready to elevate your digital presence or discuss a project?

- **Website**: [aphoric.org](https://aphoric.org)
- **Email**: [contact@aphoric.org](mailto:contact@aphoric.org)
- **Headquarters**: Dhaka, Bangladesh
- **Instagram**: [@aphoricorg](https://www.instagram.com/aphoricorg)
- **Facebook**: [facebook.com/aphoric.org](https://www.facebook.com/aphoric.org)
- **Behance**: [behance.net/aphroricorg](https://www.behance.net/aphroricorg)
- **WhatsApp**: [+880 1798-855024](https://wa.me/8801798855024)

---

<div align="center">
  <p>© 2026 <b>Aphoric</b>. All rights reserved.</p>
</div>
