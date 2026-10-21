# Mariia Velykodna Portfolio

Frontend portfolio ported from `mariia-velykodna.vercel.app`, extended with additional featured case studies, and configured for static deployment on **GitHub Pages**.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static HTML Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Dark Theme tokens)
- **Icons:** Lucide React
- **Hosting:** GitHub Pages via GitHub Actions

## Features

- **Header / Navigation:** Fixed blur navbar with navigation anchors and LinkedIn CTA button.
- **Hero:** Full-bleed background visual, introductory headline, tagline, and skill pill tags.
- **Solutions / Software:** Tool showcase grid (Maya, ZBrush, Illustrator, Krita, Photoshop, Substance, Blender, Figma).
- **About:** Personal statement and contact link.
- **Featured Case Studies:**
  - **SecureID:** Improving User Trust Through Security Notifications (Figma case study).
  - **Smart Home:** Interactive Mobile UI & Icon Component System across 3 sizes ([GitHub](https://github.com/mashank12/smart-home)).
  - **DriveSync (Climate Control):** Connected Car Climate Control, Design System, Onboarding Flow & Micro-Animations ([GitHub](https://github.com/mashank12/accenture-task)).
  - Interactive category filter pills (`All`, `SecureID`, `Smart Home`, `DriveSync`).
- **Featured 3D Projects:** ArtStation gallery card grid with hover animations.
- **Footer:** Social links, navigation, and direct email contact.

## Getting Started Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building Static Output

```bash
npm run build
```

The static site will be generated in the `out/` folder, ready for any static web host.

## Deploying to GitHub Pages

1. Push your code to your GitHub repository (`main` branch):
   ```bash
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
2. In your repository on GitHub:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. The `.github/workflows/deploy.yml` action will automatically build and deploy your site on every push!
