# 🏎️ Dodge Challenger SRT Hellcat — Scrollytelling Showcase

A cinematic, scroll-driven web experience showcasing the **Dodge Challenger SRT Hellcat**.  
Built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**, this project uses a Pagani-inspired, ultra-minimal design language with precision-focused UI and controlled motion.

The goal is simple: let engineering and motion tell the story, not gimmicks.

---

## ✨ Features

### Scroll-Driven Image Sequence
- 240-frame car reveal animation
- Locked to a **600vh sticky scroll container**
- Rendered on **HTML5 Canvas** with high-DPI support
- Scroll position maps directly to frame index for perfect control

### Engine Exploded View
- Dedicated `/engine` route
- 184-frame cinematic engine disassembly sequence
- Triggered via the **“About SRT”** button
- Layer-by-layer exploded view with zero morphing or distortion

### Progressive Text Overlays
- Technical specs and narrative content
- Fade in and out based on scroll position
- Implemented using **Framer Motion `useTransform`**
- Text always supports visuals, never competes with them

### Typography System
- **Orbitron** for headings
- **Rajdhani** for body text
- **IBM Plex Mono** for technical specifications and data

### Pagani-Inspired Aesthetic
- Ultra-minimal, high-contrast dark studio environment
- Restrained gold accents
- Thin borders and precise spacing
- No visual noise, no unnecessary animation

### Responsive Design
- Fully responsive across desktop and mobile viewports
- Canvas scaling and layout adjustments handled cleanly

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
| Next.js 16 (App Router) | Framework & routing |
| Tailwind CSS v4 | Styling & design system |
| Framer Motion | Scroll-linked animations |
| HTML5 Canvas | Frame-by-frame image rendering |
| TypeScript | Type safety |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/raviraj-01/srt-landing-page.git

# Navigate to the project
cd srt-landing-page

# Install dependencies
npm install

# Run the development server
npm run dev
