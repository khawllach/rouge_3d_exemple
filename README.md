# Rouge Éternel — Interactive 3D Beauty Landing Page

A luxury makeup landing page built around a real-time 3D lipstick that reacts to the cursor and to scrolling. White canvas, rose tones, soft shadows.

**Live demo:** https://rouge3dexemple.vercel.app


## Features

- **Interactive 3D model**: a lipstick built entirely in code (no external model files). It tilts and turns with the mouse and floats gently.
- **Scroll-driven animation**: a GSAP ScrollTrigger timeline rotates, moves and scales the model from section to section.
- **Live shade switcher**: pick a shade and the lipstick colour, the background glow, the lighting and the floor shadow all change together.
- **Premium materials**: physically based gold and pearl finishes lit by a studio environment, with a soft contact shadow.
- **Ambient particles**: floating rose petals that drift with the cursor and scroll.
- **Responsive**: on mobile the model is centred and scaled down, and text sits on translucent panels for readability.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18, TypeScript |
| 3D | Three.js, React Three Fiber, drei |
| Animation | GSAP, ScrollTrigger |
| Styling | Tailwind CSS |
| Build | Vite |
| Hosting | Vercel |

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/khawllach/rouge_3d_exemple.git
cd rouge_3d_exemple
npm install
npm run dev
```

Open http://localhost:5173.

Other scripts:

```bash
npm run build     # type-check and create the production build in /dist
npm run preview   # serve the production build locally
```

If `npm install` reports a peer dependency conflict, run `npm install --legacy-peer-deps`.

## Project structure

```
src/
├── components/
│   ├── Lipstick.tsx      # procedural 3D model, reacts to pointer, scroll and shade
│   ├── Petals.tsx        # floating particles
│   ├── Scene.tsx         # Canvas, lights, studio environment, contact shadow
│   └── ShadePicker.tsx   # shade cards
├── lib/
│   ├── scrollState.ts    # shared mutable state: GSAP writes, R3F reads every frame
│   └── shades.ts         # shade data
├── hooks.ts              # ScrollTrigger timeline and text reveals
├── App.tsx               # page layout and sections
└── main.tsx
```

### How the scroll animation works

GSAP animates a plain object (`scrollState`) with a scrubbed ScrollTrigger timeline. On every frame, `Lipstick.tsx` reads that object inside `useFrame` and smooths the values with `MathUtils.damp`. Because the scroll values never go through React state, scrolling causes no re-renders and stays smooth.

## Customisation

- **Shades**: edit the list in `src/lib/shades.ts`.
- **Colours and fonts**: edit `tailwind.config.js`.
- **Scroll choreography**: change the three `.to(...)` steps in `src/hooks.ts`.
- **Use your own model**: replace `Lipstick.tsx` with a `useGLTF` model from drei and keep the same `useFrame` logic.

## Offline note

The studio lighting (`<Environment preset="studio" />`) downloads an HDR file the first time the page loads. To work fully offline, download an `.hdr` file into `public/` and use `<Environment files="/studio.hdr" />`.

## Deployment

The project deploys to Vercel with zero configuration: import the repository, keep the detected Vite preset and click Deploy.

## License

MIT. Free to use as a learning reference or portfolio base.

## Structure
- `src/components/Lipstick.tsx`  procedural 3D model (no external files), reacts to pointer + scroll + shade
- `src/components/Scene.tsx`     Canvas, lights, studio environment, contact shadow
- `src/hooks.ts`                 GSAP ScrollTrigger timeline (drives the model) + text reveals
- `src/lib/scrollState.ts`       shared mutable state: GSAP writes, R3F reads every frame
- `src/lib/shades.ts`            shade data
