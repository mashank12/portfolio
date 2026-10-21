# Mariia Velykodna Portfolio

Frontend portfolio ported from `mariia-velykodna.vercel.app`, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Header / Navigation:** Fixed blur navbar with navigation anchors and LinkedIn CTA button.
- **Hero:** Full-bleed background visual, introductory headline, tagline, and skill pill tags.
- **Solutions / Software:** Tool showcase grid (Maya, ZBrush, Illustrator, Krita, Photoshop, Substance, Blender, Figma).
- **About:** Personal statement and contact link.
- **Featured Project:** Showcase carousel highlighting the SecureID UX/UI case study.
- **Featured 3D Projects:** ArtStation gallery card grid with hover animations.
- **Footer:** Social links, navigation, and direct email contact.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Building for Production

```bash
npm run build
npm run start
```

## Extending the Project

- **Adding / Modifying Projects:** Edit `src/components/Projects.tsx` where projects are defined in the `projects` array.
- **Modifying Tools / Software:** Edit `src/components/Solutions.tsx` in the `tools` array.
- **Updating Hero / Skills:** Edit `src/components/Hero.tsx`.
- **Modifying Featured Case Study:** Edit `src/components/FeaturedProject.tsx`.
- **Theme & Colors:** Adjust variables in `src/app/globals.css` and `tailwind.config.ts`.
