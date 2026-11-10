# Efrem Albert Alvin — Personal Portfolio & Web CV

Modern, minimalist single-page Web CV and interactive portfolio for **Efrem Albert Alvin** (Creative Technologist & Commercial Visual Producer), built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for seamless 1-click deployment on **Vercel**.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Reticles
- **Deployment Target**: [Vercel](https://vercel.com/)

---

## 🎨 Design Language & Aesthetic

- **Theme**: Ultra-clean Dark Mode (`#0b0f17`, surface `#111723`, border `zinc-800/60`, text `zinc-100`).
- **Accents**: Subtle Cyan & Sky Blue (`sky-400` / `cyan-400`).
- **Layout**: Centered `max-w-4xl` container, mobile-first responsive design, zero horizontal scroll.
- **Interactions**: Smooth card hover elevation, interactive modal inspectors for software architecture and visual EXIF metadata, toast clipboard feedback, and ATS/print-ready CV viewer.

---

## 📁 Project Structure

```text
├── public/                 # Static public assets & icons
├── src/
│   ├── app/
│   │   ├── globals.css     # Dark mode base tokens & micro-animations
│   │   ├── layout.tsx      # SEO metadata & font optimization
│   │   └── page.tsx        # Main single-page interactive layout
│   ├── components/
│   │   ├── Header.tsx      # Sticky minimal navigation bar
│   │   ├── Hero.tsx        # Profile headline & quick action buttons
│   │   ├── Projects.tsx    # Technical & automation projects grid
│   │   ├── FotonicShowcase.tsx # FOTONIC commercial visual showcase & EXIF
│   │   ├── VisualArtworks.tsx  # High-precision vector SVG artworks
│   │   ├── Skills.tsx      # 3 skill clusters (Dev, Post-Pro, Core)
│   │   ├── Timeline.tsx    # Academic & organization history
│   │   ├── Footer.tsx      # Clean footer & social links
│   │   ├── ProjectModal.tsx # Architectural specs modal
│   │   ├── VisualModal.tsx  # EXIF lightbox inspector modal
│   │   ├── CvModal.tsx      # Print-ready Curriculum Vitae sheet
│   │   └── Icons.tsx        # SVG icons
│   └── data/
│       └── portfolioData.ts # Typed portfolio data source
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project scripts & dependencies
```

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Akses aplikasi di [http://localhost:3000](http://localhost:3000).

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to Vercel

### Opsi 1: Otomatis via GitHub (Direkomendasikan)
1. Push branch `main` ke repositori GitHub: `https://github.com/efremalvin/Efrem-Personalportfolio`.
2. Buka [Vercel Dashboard](https://vercel.com/dashboard) dan klik **Add New Project**.
3. Import repositori **`efremalvin/Efrem-Personalportfolio`**.
4. Vercel akan otomatis mendeteksi framework **Next.js**. Klik **Deploy**.

### Opsi 2: Menggunakan Vercel CLI
```bash
npx vercel
```
Ikuti instruksi di terminal untuk deploy instan.

---

## 👤 Profil

- **Nama**: Efrem Albert Alvin
- **Peran**: Creative Technologist & Commercial Visual Producer
- **Afiliasi**: Pendidikan Teknologi Informasi, Universitas Lampung (2023)
- **Lokasi**: Bandar Lampung, Indonesia
- **GitHub**: [@efremalvin](https://github.com/efremalvin)
