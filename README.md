# Rouge Atelier — Interactive 3D (React + TS + R3F + GSAP + Tailwind)

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Deploy (free)
- Vercel: `npx vercel` (framework: Vite)  — or Netlify: build `npm run build`, publish `dist`.

## Structure
- `src/components/Lipstick.tsx`  procedural 3D model (no external files), reacts to pointer + scroll + shade
- `src/components/Scene.tsx`     Canvas, lights, studio environment, contact shadow
- `src/hooks.ts`                 GSAP ScrollTrigger timeline (drives the model) + text reveals
- `src/lib/scrollState.ts`       shared mutable state: GSAP writes, R3F reads every frame
- `src/lib/shades.ts`            shade data
